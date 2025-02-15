## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!


### Task 1: Update form accessibility

- Associate labels with inputs using `htmlFor` attributes
- Convert credit/debit selection to radio buttons with appropriate styles
- Enhance focus styles for better visibility
- Use `fieldset` and `legend` for radio button grouping
- Change the card listing to an ordered list for better semantics
- Destructure the card object for improved readability
- Add `inputMode` to credit card and CVC fields to trigger numeric keyboards on mobile
- Mark icons in the credit card list as `aria-hidden` since they don't enhance keyboard navigation
- Consult the designer about the inconsistent label placement:
  - Credit card radio buttons are below their labels
  - Other inputs have labels positioned to the left


### Task 2: Build UI based on wireframe

- Reused the Credit Card list style/pattern for transactions and made it reusable. With more time, I'd convert it into a React component.
- Created reusable styles for radio inputs to match the credit/debit toggle in the Wallet view. Ideally, this would also be a React component.
- Used `aria-hidden` on icons in Budget categories since they don't add value for keyboard navigation.
- Updated the Button component to accept additional props and class names.
- Created a `VisuallyHidden` component to provide accessible text for icons.
- Built a `Currency` component to format dollar amounts, making it easier to handle raw numbers, currency symbols, and different currencies.
- Noticed some design inconsistencies to discuss with the designer:
  - Input labels are positioned differently across forms (e.g., above the field vs. to the left).
  - The Category form omits colons in labels, while the Credit Card form includes them. For consistency, I followed the Credit Card form's approach.
- Ran out of time to implement form functionality. 😞


### Task 3: Refactor to add visual hierarchy

- Sorted transactions in descending order by date.
- Reused existing slat styles for consistency.
- Styled values greater than $0 in green and less than $0 in red.
- Used text instead of an icon for categories to improve clarity. While an icon with a tooltip or accompanying text could work, it felt unnecessary in this context.


### Notes:

This was an exciting project, and I enjoyed working on it! Along the way, I learned some new techniques and spent time refining my approach. One challenge I encountered was determining how far to go with refactoring—I could have continued iterating but had to balance that with the available time. I ended up spending more than four hours on this, but I didn't mind because I genuinely enjoy the refactoring process. Given the short turnaround, I made some opinionated decisions. You mentioned that I could reach out with any questions, and in a real-world collaboration with designers and engineers, I would take advantage of that.

For the markup, I prioritized semantic structure. I did use some heading elements out of sequential order, which isn't ideal for accessibility, but I opted not to invest additional time in creating reusable styles to adjust for that. I incorporated ARIA attributes where appropriate and tested the implementation for responsiveness and screen reader compatibility.

I did not use AI to generate any code.

There are a few unresolved TypeScript errors—I'm still building my proficiency in TypeScript. I understand that JavaScript was an option, but I wanted to align with the toolset Planning Center uses.

Thanks again! I appreciate the opportunity and look forward to speaking with you soon.

