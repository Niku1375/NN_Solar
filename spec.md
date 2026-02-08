# Specification

## Summary
**Goal:** Increase the Solar Savings Calculator “Monthly Electricity Bill” input limit to ₹100,000 (1 lakh) and ensure the UI and manual entry validation match the new range.

**Planned changes:**
- Update the “Monthly Electricity Bill” slider maximum to 100,000 and ensure the slider range and min/max labels consistently display the new maximum (formatted as ₹100,000 / ₹1,00,000 as used in the UI).
- Add clamping/validation for manual numeric entry so the monthly bill cannot go below 1,000 or above 100,000, and ensure clearing/invalid input returns to a valid number without producing NaN/Infinity in results.

**User-visible outcome:** Users can set the Monthly Electricity Bill up to ₹100,000 via the slider or manual entry, with correct labels and stable calculations even if the input is briefly invalid or empty.
