import { useState } from "react";
import semester1 from "../data/semester1";
import semester2 from "../data/semester2";
import semester3 from "../data/semester3";
import semester4 from "../data/semester4";
import semester5 from "../data/semester5";
import semester6 from "../data/semester6";
import semester7 from "../data/semester7";
import semester8 from "../data/semester8";
import semesterGPA from "../data/semesterGPA";

import { X, BarChart3 } from "lucide-react";
export default function Grades() {
  const [activeSemester, setActiveSemester] = useState(null);
  const [showGpaPopup, setShowGpaPopup] = useState(false);
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
        GRADES
      </h1>


      {/* Semester Buttons */}

      <div className="flex justify-center mb-10">

        <div className="flex flex-wrap justify-center items-center gap-4">

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

          {/* GPA Button */}

          <button
            onClick={() => setShowGpaPopup(true)}
            className="
        px-6
        py-3
        rounded-lg
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        flex
        items-center
        gap-2
        hover:scale-105
        transition
        shadow-lg
      "
          >
            <BarChart3 size={18} />
            GPA Record
          </button>

        </div>

      </div>


      {/* Content Area */}

      <div className="rounded-xl border border-white/10 overflow-hidden">

        <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 p-4 text-xl font-bold">

          {activeSemester
            ? `Semester ${activeSemester}`
            : "Select a Semester"}

        </div>

        <div className="p-8 min-h-[250px]">

          {!activeSemester ? (
            <div className="flex items-center justify-center h-full text-2xl text-gray-400">
              Select a Semester
            </div>
          ) : (
            <>
              {activeSemester === 1 && (
                <>
                  <div className="overflow-x-auto">

                    <table className="w-full border-collapse text-sm">

                      <thead>

                        <tr className="bg-sky-700 text-white">

                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>

                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>

                      </thead>

                      <tbody>

                        {semester1.map((course) => (
                          <tr key={course.slNo}>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>

                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>

                  <div className="mt-6 flex gap-6">

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Total Credits :
                      </span>{" "}
                      21.5
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Semester GPA :
                      </span>{" "}
                      7.82
                    </div>

                  </div>
                </>
              )}

              {activeSemester === 2 && (
                <>
                  {/* Use the SAME table code as Semester 1 */}
                  {/* Just replace semester1.map with semester2.map */}

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">

                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>

                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester2.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Total Credits :</span> 22.5
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Semester GPA :</span> 7.54
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 3 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester3.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Total Credits :
                      </span>{" "}
                      27.5
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Semester GPA :
                      </span>{" "}
                      6.75
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 4 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester4.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Total Credits :
                      </span>{" "}
                      26.5
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Semester GPA :
                      </span>{" "}
                      0.00
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 5 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester5.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Total Credits :
                      </span>{" "}
                      32.5
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Semester GPA :
                      </span>{" "}
                      7.93
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 6 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>
                          <th colSpan="4" className="border p-2">Credits</th>
                          <th rowSpan="2" className="border p-2">Grading Type</th>
                          <th rowSpan="2" className="border p-2">Grand Total</th>
                          <th rowSpan="2" className="border p-2">Grade</th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester6.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.slNo}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.code}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.title}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.type}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.l}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.p}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.j}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.c}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.grading}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.total}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">{course.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Total Credits :</span> 34.0
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Semester GPA :</span> 8.07
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 7 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>
                          <th colSpan="4" className="border p-2">Credits</th>
                          <th rowSpan="2" className="border p-2">Grading Type</th>
                          <th rowSpan="2" className="border p-2">Grand Total</th>
                          <th rowSpan="2" className="border p-2">Grade</th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester7.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.slNo}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.code}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.title}</td>
                            <td className="bg-stone-100 text-black border p-2">{course.type}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.l}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.p}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.j}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.c}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.grading}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center">{course.total}</td>
                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">{course.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Total Credits :</span> 17.0
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">Semester GPA :</span> 8.41
                    </div>
                  </div>
                </>
              )}

              {activeSemester === 8 && (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-sky-700 text-white">
                          <th rowSpan="2" className="border p-2">Sl.No</th>
                          <th rowSpan="2" className="border p-2">Course Code</th>
                          <th rowSpan="2" className="border p-2">Course Title</th>
                          <th rowSpan="2" className="border p-2">Course Type</th>

                          <th colSpan="4" className="border p-2">
                            Credits
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grading Type
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grand Total
                          </th>

                          <th rowSpan="2" className="border p-2">
                            Grade
                          </th>
                        </tr>

                        <tr className="bg-sky-700 text-white">
                          <th className="border p-2">L</th>
                          <th className="border p-2">P</th>
                          <th className="border p-2">J</th>
                          <th className="border p-2">C</th>
                        </tr>
                      </thead>

                      <tbody>
                        {semester8.map((course) => (
                          <tr key={course.slNo}>
                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.slNo}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.code}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.title}
                            </td>

                            <td className="bg-stone-100 text-black border p-2">
                              {course.type}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.l}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.p}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.j}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.c}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.grading}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center">
                              {course.total}
                            </td>

                            <td className="bg-stone-100 text-black border p-2 text-center font-bold">
                              {course.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex gap-6">
                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Total Credits :
                      </span>{" "}
                      12.0
                    </div>

                    <div className="bg-slate-800 px-6 py-4 rounded-lg">
                      <span className="font-bold">
                        Semester GPA :
                      </span>{" "}
                      9.42
                    </div>
                  </div>
                </>
              )}
            </>
          )}

        </div>

      </div>
          {showGpaPopup && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="w-[700px] rounded-2xl overflow-hidden border border-blue-500 bg-[#030b2d]">

      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">

        <h2 className="text-2xl font-bold">
          Semester GPA Record
        </h2>

        <button
          onClick={() => setShowGpaPopup(false)}
          className="text-2xl font-bold hover:text-red-400"
        >
          ✕
        </button>

      </div>

      <div className="p-6">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-sky-700 text-white">

              <th className="border p-3">
                Semester
              </th>

              <th className="border p-3">
                Credits Earned
              </th>

              <th className="border p-3">
                GPA
              </th>

            </tr>

          </thead>

          <tbody>

            {Object.entries(semesterGPA).map(([sem, data]) => (
              <tr key={sem}>

                <td className="bg-stone-100 text-black border p-3 text-center font-semibold">
                  Semester {sem}
                </td>

                <td className="bg-stone-100 text-black border p-3 text-center">
                  {data.credits}
                </td>

                <td className="bg-stone-100 text-black border p-3 text-center font-bold">
                  {data.gpa}
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