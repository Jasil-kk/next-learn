# MCQ Test Application

This is a **Next.js** based MCQ (Multiple Choice Question) Test application with authentication, instructions, quiz, and result pages. The project is built with **TypeScript**, **Tailwind CSS**, and **Redux Toolkit** for state management. It includes form validation using **Formik + Yup**, API integration with **Axios**, and toast notifications using **Sonner**.

---

## Features

1. **Authentication**
   - Users log in using their **mobile number**.
   - OTP verification is required.
   - If the user is not registered, they must fill in their **personal details** (name, email, qualification, profile image).

2. **Instructions Page**
   - After logging in, users are redirected to the **Instructions Page**.
   - Shows the total number of questions, total marks, and total time for the test.
   - Displays instructions for the test.
   - Clicking **Start Test** navigates to the MCQ page.

3. **MCQ Page**
   - Displays questions with multiple choice options.
   - Users can **select answers**, navigate between questions, or mark questions for review.
   - Countdown timer based on the total test time.
   - Auto-submit functionality when time expires.
   - **Comprehensive paragraphs** can be viewed in a modal if provided.

4. **Result Page**
   - After submitting the answers, users are redirected to the **Result Page**.
   - Shows total questions, correct answers, incorrect answers, and unanswered questions.
   - Displays the user's score.

---

## Technologies Used

- **Next.js** (React Framework)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **Formik + Yup** for form handling and validation
- **Axios** for API calls
- **Sonner** for toast notifications
- **React Hooks** for custom logic
- **Next.js App Router** (`use client` for client components)

---

## Installation

1. Clone the repository:

git clone <https://github.com/Jasil-kk/next-learn.git>
cd <next-learn>
npm install
npm run dev
The app will be available at http://localhost:3000

## Usage

1. Enter your mobile number and verify OTP.
2. Fill in personal details if not already registered.
3. Read instructions on the Instructions Page.
4. Start the test and answer questions in the MCQ page.
5. Submit the test or wait for auto-submit when the timer ends.
6. View your results on the Result Page.

## Notes

- Forms are validated using Formik + Yup.
- State is managed using Redux Toolkit.
- Toast notifications are handled by Sonner.


