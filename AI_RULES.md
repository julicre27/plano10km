# AI Rules for Plano de Corrida Interativo

This document outlines the technical stack and specific library usage guidelines for developing the "Plano de Corrida Interativo" application.

## Tech Stack Description

*   **Frontend Framework**: React for building dynamic and interactive user interfaces.
*   **Language**: TypeScript for enhanced code quality, type safety, and improved developer experience.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid development of responsive and consistent designs.
*   **Build Tool**: Vite, providing a fast development server and optimized production builds.
*   **State Management**: Leverages React's built-in `useState` and `useEffect` hooks for managing component and application state.
*   **Data Persistence**: Utilizes the browser's `localStorage` for simple client-side data storage, ensuring user data like workout logs and goals persist across sessions.
*   **Icons**: Custom SVG components are currently used for application icons.
*   **Routing**: The application currently manages navigation through conditional rendering based on internal state.

## Library Usage Rules

To maintain consistency, performance, and best practices, please adhere to the following rules when developing or modifying the application:

*   **UI Components**:
    *   **Always prioritize using `shadcn/ui` components** for any new UI elements. These components are pre-installed and styled with Tailwind CSS.
    *   If a specific `shadcn/ui` component does not exist or cannot be adapted, create a new custom component in `src/components/`.
    *   **Do not modify `shadcn/ui` component files directly.** If customization is needed, wrap the `shadcn/ui` component in a new custom component.
*   **Styling**:
    *   **Exclusively use Tailwind CSS classes** for all styling. Avoid inline styles or separate CSS files.
    *   Ensure all designs are responsive by utilizing Tailwind's responsive utility classes (e.g., `sm:`, `md:`, `lg:`).
*   **Icons**:
    *   **Prefer `lucide-react` for all icons.** This package is already installed and provides a wide range of vector icons.
    *   If a required icon is not available in `lucide-react`, add a new SVG component to `src/components/icons.tsx`.
*   **Routing**:
    *   For managing application navigation, **use React Router**. All primary application routes should be defined and managed within `src/App.tsx`.
*   **State Management**:
    *   Utilize React's `useState` and `useReducer` for local component state.
    *   For global state that needs to be shared across many components, consider the React Context API.
    *   `localStorage` is suitable for simple client-side data persistence of user preferences or application state that doesn't require a backend.
*   **Notifications**:
    *   Use `react-hot-toast` for all user notifications (e.g., success messages, error alerts, loading indicators). This provides a consistent and user-friendly feedback mechanism.