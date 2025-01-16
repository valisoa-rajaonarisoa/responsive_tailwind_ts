import Navbar from "./Navbar";

type Props = {}

const App = (props: Props) => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-red-500 mb-6">Home Page</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Welcome to the home page! We're excited to have you here.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        This is where the journey begins. You can explore various sections, learn new things, and stay updated.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">What's New?</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
        <li>New interactive tutorials.</li>
        <li>Improved learning paths for better navigation.</li>
        <li>Fresh content added regularly.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Join Us</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Become a part of our community and start learning today. Stay tuned for more exciting features and content updates!
      </p>
    </div>
  );
}

export default App;
