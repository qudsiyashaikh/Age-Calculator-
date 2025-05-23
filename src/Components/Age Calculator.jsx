
import { useState } from 'react';
const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthDate) {
      const calculatedAge = calculateAge(birthDate);
      setAge(calculatedAge);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-green-500 to-sky-400 py-3 text-white font-semibold rounded-md hover:opacity-90 ">
      <div className=" p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>
        <form onSubmit={handleSubmit} className='text-black'>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-black p-2 rounded w-full hover:bg-blue-600"
          >
            Calculate Age
          </button>
        </form>
        {age !== null && (
          <p className="mt-4 text-black">
            Your age is: <span className="font-bold">{age}</span> years
          </p>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
