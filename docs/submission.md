## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!


### Task 1: Update form accessibility

- Update the input elements to ensure the `id` attribute is correctly linked with the label element via the `htmlFor` attribute. This enhances accessibility by allowing screen readers to associate labels with inputs, improving the experience for users relying on assistive technology, ensuring that visually impaired users can navigate forms with ease.
- Convert credit/debit selection to radio buttons with appropriate styles. Radio buttons are more intuitive for selecting one option out of multiple and align better with the user's mental model for credit card selection, resulting in improved user experience and more consistent with common UI patterns.
- Add stronger focus indicators (e.g., a thicker border or contrasting color) to form elements when they receive focus. Ensuring focus is visible is essential for users who rely on keyboard navigation. The benefit is better accessibility particularly for keyboard and screen reader users.
- Use fieldset and legend for radio button grouping. This structure enhances accessibility by grouping related elements together and providing a descriptive label for screen readers.
- Convert the card listing into an ordered list (`<ol>`) to represent the sequence more meaningfully. Lists are semantically appropriate when displaying a set of items, and an ordered list reflects the importance or order of the items. The enhanced semantic HTML improves accessibility and readability.
- Add the `inputMode="numeric"` attribute to credit card and CVC input fields. This triggers numeric keyboards on mobile devices, simplifying data entry for users creating a more user-friendly experience.
- Add the `aria-hidden="true"` attribute to icons that don't provide additional information to screen reader users. By marking icons as aria-hidden, we prevent unnecessary clutter for screen reader users, ensuring only relevant information is read aloud.

Lastly, I noted the inconsistent placement of labels (credit card radio buttons below the label, other inputs to the right) and would consult with the designer about standardizing the layout. Consistent label placement improves visual flow and user comprehension. A more consistent UI improves user experience and accessibility.


### Task 2: Build UI based on wireframe

- I noticed that the Credit Card list pattern/styles could be extended to the Transactions list. By reusing this style, I aimed to reduce redundancy in the codebase. If given more time, I’d convert this into a React component for greater reusability and maintainability.
- Created reusable styles for radio inputs to match the existing credit/debit toggle in the Wallet view. My goal here was to ensure consistency in design, and by making the styles reusable, it will be easier to maintain and expand in the future. Ideally, this would be a React component to promote flexibility in how the radio buttons are used across the app.
- Applied `aria-hidden` to icons in Budget categories to improve keyboard navigation. Since these icons don’t add value to screen readers, removing them from the accessibility tree ensures a cleaner, more intuitive experience for users who rely on assistive technologies.
- Made the `Button` component more flexible by allowing additional props and classes. This enhances the versatility of the `Button` throughout the app, reducing the need to create multiple custom components. Primarily, it allowed me to pass in the `w-100%` utility class into the `Button` component without having to write snowflake instances of SCSS in order to make the buttons in the Budget view to stretch full width.
- Created a `VisuallyHidden` component to provide accessible text. This improves accessibility by making sure that users with screen readers can understand the context of icons that are otherwise not visible to sighted users. I'm also not opposed to removing `aria-hidden` and adding `aria-label`s to the icons, but the `VisuallyHidden` has greater reusability in other contexts, and noteably not all translation tools work on `aria-label`s.
- To simplify the handling of dollar amounts and currencies, I created a `Currency` component. This reduces repetitive code, allows easy adjustments for currency formats, and helps prevent errors with currency formatting across different parts of the app. It also allows for doing math with currency values without having to 

I noticed some inconsistencies in the placement of form labels and the use of colons in labels across forms. I aligned the Category form with the Credit Card form for consistency, improving the overall user experience and making the design more cohesive.


### Task 3: Refactor to add visual hierarchy

- Sorted transactions in descending order by date to ensure the most recent and relevant information is always at the top, improving scannability.
- Reused existing slat styles to maintain design consistency and prevent unnecessary UI variations. As previously mentioned, leveraging established patterns ensures a more cohesive experience, reducing the need for users to relearn interactions. This consistency enhances usability and helps foster trust in the application.
- Styled values greater than $0 in green and less than $0 in red to provide a quick visual distinction between positive and negative amounts, enhancing readability.
- Used text instead of an icon for categories to improve clarity. While an icon with a tooltip or accompanying text could work, I felt that in this context, plain text is the most direct and accessible solution.


### Notes:

This was an exciting project, and I enjoyed working on it! Along the way, I learned some new techniques and spent time refining my approach. One challenge I encountered was determining how far to go with refactoring—I could have continued iterating but had to balance that with the available time. I genuinely enjoy the refactoring process, and given the short turnaround, I made some opinionated decisions. You mentioned that I could reach out with any questions, and in a real-world collaboration with designers and engineers, I would take advantage of that.

For the markup, I prioritized semantic structure. I did use some heading elements out of sequential order, which isn't ideal for accessibility, but I opted not to invest additional time in creating reusable styles to adjust for that. I incorporated ARIA attributes where appropriate and tested the implementation for responsiveness and screen reader compatibility.

I did not use AI to generate any code.

There are a few unresolved TypeScript errors—I'm still building my proficiency in TypeScript. I understand that JavaScript was an option, but I wanted to align with the toolset Planning Center uses.

Thanks again! I appreciate the opportunity and look forward to speaking with you soon.

