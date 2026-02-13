import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 to-black px-4 text-center">
      {/* Big error icon */}
      <svg
        className="w-24 h-24 mb-8 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-4">
        Oops!
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Sorry, this page is currently under development.
      </p>

      {/* Big button */}
      <button
        onClick={handleGoHome}
        className="px-12 py-4 text-lg font-bold text-white bg-red-700 rounded-xl shadow-lg hover:bg-red-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Go to Homepage
      </button>
    </div>
  )
}