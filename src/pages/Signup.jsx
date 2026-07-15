export default function Signup() {
  return (
    <div className="max-w-sm mx-auto px-6 py-16">
      <h1 className="text-xl font-semibold mb-6">Create your account</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}