import { useState } from "react";
import marksData from "../data/marksData";
import subjectMarks from "../data/subjectMarks";
import semesterNames from "../data/semesterNames";

export default function Marks() {
  const [activeSemester, setActiveSemester] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [showSemesterNames, setShowSemesterNames] = useState(false);
  const selectedData = subjectMarks[activeSubject];

  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  return (
    <div className="p-6 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">
        MARKS
      </h1>
      {/* Semester Names Button */}

      <div className="flex justify-center mb-10">

        <div className="flex flex-wrap justify-center gap-4">

          {semesters.map((semester, index) => (
            <button
              key={index}
              onClick={() => setActiveSemester(index + 1)}
              className={`
          px-8
          py-3
          rounded-lg
          font-semibold
          transition-all
          duration-300
          ${activeSemester === index + 1
                  ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white shadow-lg"
                  : "bg-slate-800 hover:bg-slate-700"
                }
        `}
            >
              {semester}
            </button>
          ))}

          {/* Semester Names Button */}

          <button
            onClick={() => setShowSemesterNames(true)}
            className="
        px-8
        py-3
        rounded-lg
        font-semibold
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
          >
            📚 Semester Names
          </button>

        </div>

      </div>

      {/* Main Card */}
      <div className="rounded-xl border border-white/10 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 p-4 text-xl font-bold">

          {!activeSemester
            ? "Select a Semester"
            : !activeSubject
              ? `Semester ${activeSemester} - Select a Subject`
              : activeSubject}

        </div>

        <div className="p-8">

          {!activeSemester ? (

            <div className="flex justify-center items-center h-[250px] text-3xl text-gray-400">
              Select a Semester
            </div>

          ) : (

            <>
              {/* Subject Buttons */}
              <div className="flex justify-center mb-8">

                <select
                  value={activeSubject}
                  onChange={(e) => setActiveSubject(e.target.value)}
                  className="
      w-[600px]
      bg-slate-800
      text-white
      px-5
      py-3
      rounded-lg
      border
      border-slate-600
      text-lg
      focus:outline-none
      focus:border-blue-500
    "
                >

                  <option value="">
                    Select a Subject
                  </option>

                  {marksData[activeSemester]?.map((subject, index) => (
                    <option
                      key={index}
                      value={subject}
                    >
                      {subject}
                    </option>
                  ))}

                </select>

              </div>

              {/* Subject Table */}

              {!activeSubject ? (

                <div className="flex justify-center items-center h-[200px] text-2xl text-gray-400">
                  Select a Subject
                </div>

              ) : selectedData ? (

                selectedData.simpleResult ? (

                  <div className="space-y-6">

                    <div className="bg-slate-800 rounded-xl p-6">

                      <h2 className="text-2xl font-bold text-center mb-6">
                        {selectedData.title}
                      </h2>

                      <div className="text-center text-xl space-y-3">

                        <p>
                          <span className="font-bold text-blue-400">
                            Marks:
                          </span>{" "}
                          {selectedData.summary.marks}
                        </p>

                        <p>
                          <span className="font-bold text-green-400">
                            Grade:
                          </span>{" "}
                          {selectedData.summary.grade}
                        </p>

                      </div>

                    </div>

                  </div>

                ) : (

                  <div className="overflow-x-auto">

                    <h2 className="text-3xl font-bold mb-6">
                      {selectedData.title}
                    </h2>

                    <table className="w-full border-collapse">

                      <thead>

                        <tr className="bg-gray-300 text-black">

                          <th className="border p-3">Sl.No.</th>
                          <th className="border p-3">Mark Title</th>
                          <th className="border p-3">Max. Mark</th>
                          <th className="border p-3">Weightage %</th>
                          <th className="border p-3">Scored Mark</th>
                          <th className="border p-3">Weightage Mark</th>

                        </tr>

                      </thead>

                      <tbody>

                        {selectedData.rows.map((row) => (

                          <tr
                            key={row.slNo}
                            className="bg-stone-100 text-black"
                          >

                            <td className="border p-3 text-center">
                              {row.slNo}
                            </td>

                            <td className="border p-3">
                              {row.markTitle}
                            </td>

                            <td className="border p-3 text-center">
                              {row.maxMark}
                            </td>

                            <td className="border p-3 text-center">
                              {row.weightage}
                            </td>

                            <td className="border p-3 text-center">
                              {row.scoredMark}
                            </td>

                            <td className="border p-3 text-center">
                              {row.weightageMark}
                            </td>

                          </tr>

                        ))}

                        <tr>

                          <td className="border bg-stone-100"></td>

                          <td className="border bg-blue-300 text-black text-center font-bold">
                            Total:
                          </td>

                          <td className="border bg-blue-300 text-black text-center">
                            {selectedData.total.maxMark}
                          </td>

                          <td className="border bg-blue-300 text-black text-center">
                            {selectedData.total.weightage}
                          </td>

                          <td className="border bg-blue-300 text-black text-center font-bold">
                            {selectedData.total.scoredMark}
                          </td>

                          <td className="border bg-blue-300 text-black text-center font-bold">
                            {selectedData.total.weightageMark}
                          </td>

                        </tr>

                      </tbody>

                    </table>

                  </div>

                )

              ) : (

                <div className="text-center text-pink-400 text-xl">
                  No marks data available for this subject.
                </div>

              )}

            </>

          )}

        </div>

      </div>
      {showSemesterNames && (

  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-slate-900 rounded-xl w-[95%] max-w-5xl border border-blue-500 shadow-2xl">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">

        <h2 className="text-2xl font-bold">
          Semester Name Records
        </h2>

        <button
          onClick={() => setShowSemesterNames(false)}
          className="
            text-red-400
            text-3xl
            font-bold
            hover:text-red-300
          "
        >
          ×
        </button>

      </div>

      {/* Table */}

      <div className="p-6 overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white">

              <th className="border p-3">
                Semester
              </th>

              <th className="border p-3">
                Academic Year
              </th>

              <th className="border p-3">
                Official Semester Name
              </th>

            </tr>

          </thead>

          <tbody>

            {semesterNames.map((item) => (

              <tr key={item.sem}>

                <td className="bg-stone-100 text-black border p-3 text-center font-bold">
                  Semester {item.sem}
                </td>

                <td className="bg-stone-100 text-black border p-3 text-center">
                  {item.academicYear}
                </td>

                <td className="bg-stone-100 text-black border p-3">
                  {item.semesterName}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>

)}

    </div>
  );
}