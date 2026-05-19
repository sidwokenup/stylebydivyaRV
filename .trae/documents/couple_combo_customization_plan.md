# Couple Combo Customization Plan

## Summary
Implement a dynamic outfit selection feature for Women in the "Couple Combo" category while retaining Men's size selection. Women's size selection (S, M, L, XL) will be removed and replaced with a customizable outfit selector (e.g., "Top Only", "Skirt Only", "Whole Outfit"). The product price will dynamically update based on the selected women's outfit option.

## Current State Analysis
Currently, Couple Combo products prompt users to select a size (S, M, L, XL) for both Men and Women. The price of the product is statically tied to the base product price in `src/lib/products.ts` (₹ 1599).

## Proposed Changes

### 1. Update Product Data Structure (`src/lib/products.ts`)
**What:** Add a new optional property to define available women's outfit options and their respective prices.
**Why:** This allows you to configure specific products to have all 3 options, while restricting others to just "Top Only", giving you full control on a per-product basis.
**How:**
- Extend the `Product` interface:
  ```typescript
  export interface WomenOutfitOption {
    label: string;
    price: number;
  }
  
  export interface Product {
    // ... existing fields
    womenOutfitOptions?: WomenOutfitOption[];
  }
  ```
- Update the mock data in the `Couple Combo` category. For example:
  - Add all 3 options (`Top Only: 1599`, `Skirt Only: 1599`, `Whole Outfit: 2599`) to some products.
  - Add just 1 option (`Top Only: 1599`) to others.

### 2. Update Product View UI (`src/components/shop/ProductView.tsx`)
**What:** Replace the Women's size selector with the new Outfit selector and dynamically update the displayed price.
**Why:** To reflect the free-size nature of women's clothing and allow users to select their desired combo pieces.
**How:**
- Add a new state variable: `const [selectedWomenOutfit, setSelectedWomenOutfit] = useState(...)`.
- Update the `useEffect` to default the selection to the first available option when a product loads.
- Calculate the active price dynamically: `const activePrice = selectedWomenOutfit ? selectedWomenOutfit.price : product.price`.
- Update the UI to display `activePrice` instead of `product.price`.
- In the "Select Sizes" section:
  - Keep the Men's size buttons (S, M, L, XL).
  - Replace the Women's size buttons with the options mapped from `product.womenOutfitOptions`.
  - Add a "Free Size" label indicator for the women's section.

### 3. Update Cart & WhatsApp Integration (`src/components/shop/ProductView.tsx`)
**What:** Ensure the correct price and variant labels are passed to the cart and WhatsApp messages.
**Why:** So that checkout accurately reflects the customized outfit and the adjusted price.
**How:**
- In `handleBuyNow`: Update the WhatsApp message generation to use `activePrice` and append the selected variant (e.g., `Sizes: Men's Size: M, Women's Outfit: Whole Outfit (Free Size)`).
- In the `<AddToCartButton />` component call: Pass a cloned product object with the updated price (`{ ...product, price: activePrice }`) and the formatted variant string so the `CartContext` registers it correctly.

## Assumptions & Decisions
- **Data-Driven Configuration:** By moving the options into `products.ts`, you have absolute freedom to add, remove, or change pricing for outfit combinations on a per-product basis without touching the UI code again.
- **Free Size Standard:** Women's combo pieces will automatically be labeled as "Free Size" in the cart and WhatsApp messages.
- **Cart Compatibility:** No changes are required in `CartDrawer.tsx` or `CartContext.tsx` because the `AddToCartButton` will directly feed the dynamically adjusted price and variant string into the existing robust cart system.

## Verification Steps
1. Navigate to a Couple Combo product configured with 3 options.
2. Verify that the Women's selector shows "Top Only", "Skirt Only", and "Whole Outfit".
3. Click "Whole Outfit" and verify the displayed price instantly changes to ₹ 2599.
4. Add the product to the cart and verify the drawer reflects the new price and the correct variant string.
5. Click "Buy Now" and verify the WhatsApp message contains the correct price and size/outfit details.