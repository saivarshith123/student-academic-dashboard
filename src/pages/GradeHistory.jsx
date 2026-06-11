import gradeData from "../data/gradeData";

export default function GradeHistory() {
    return (
        <div className="p-6 text-white">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

                <h1 className="text-3xl font-bold">
                    GRADE HISTORY
                </h1>

                <a
                    href="/grade-history.pdf"
                    download
                    className="
            px-5
            py-3
            rounded-lg
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            font-semibold
            hover:scale-105
            transition
            duration-300
          "
                >
                    Download PDF
                </a>

            </div>

            {/* Grade History Table */}

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">

                <table className="w-full border-collapse text-sm">

                    <thead>
                        <tr className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">

                            <th className="border border-gray-500 p-3">
                                Sl.No
                            </th>

                            <th className="border border-gray-500 p-3">
                                Course Code
                            </th>

                            <th className="border border-gray-500 p-3">
                                Course Title
                            </th>

                            <th className="border border-gray-500 p-3">
                                Type
                            </th>

                            <th className="border border-gray-500 p-3">
                                Credits
                            </th>

                            <th className="border border-gray-500 p-3">
                                Grade
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {gradeData.map((course) => (
                            <tr key={course.slNo}>

                                <td className="bg-slate-700 border border-gray-500 p-3 text-center">
                                    {course.slNo}
                                </td>

                                <td className="bg-stone-100 text-black border border-gray-500 p-3">
                                    {course.code}
                                </td>

                                <td className="bg-stone-100 text-black border border-gray-500 p-3">
                                    {course.title}
                                </td>

                                <td className="bg-stone-100 text-black border border-gray-500 p-3 text-center">
                                    {course.type}
                                </td>

                                <td className="bg-stone-100 text-black border border-gray-500 p-3 text-center">
                                    {course.credits}
                                </td>

                                <td className="bg-stone-100 text-black border border-gray-500 p-3 text-center font-bold">
                                    {course.grade}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* Curriculum Distribution */}

            {/* CURRICULUM DISTRIBUTION */}

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">

                <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 p-4 text-xl font-bold">
                    CURRICULUM DISTRIBUTION
                </div>

                <table className="w-full border-collapse text-sm">

                    <thead>
                        <tr className="bg-sky-700 text-white">
                            <th className="border border-black p-3">
                                Curriculum Distribution Type
                            </th>

                            <th className="border border-black p-3">
                                Credits Required
                            </th>

                            <th className="border border-black p-3">
                                Credits Earned
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {[
                            ["Foundation Core - Basic Sciences and Mathematics", 24, 24],
                            ["Foundation Core - Basic Engineering Sciences", 14, 14],
                            ["Foundation Core - Humanities, Social Sciences and Management", 15, 15],
                            ["Discipline-linked Engineering Sciences", 12, 12],
                            ["Discipline Core", 47, 47],
                            ["Discipline Elective", 9, 18],
                            ["Projects and Internship", 9, 9],
                            ["Open Elective", 15, 15],
                            ["Non-graded Core Requirement", 11, 11],
                            ["Bridge Course", 2, 2],
                            ["Multidisciplinary Electives", 0, 0],
                            ["Total Credits", 145, 167],
                        ].map((row, index) => (
                            <tr key={index}>
                                <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                    {row[0]}
                                </td>

                                <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                    {row[1]}
                                </td>

                                <td className="bg-stone-100 text-green-700 font-bold border border-black p-3 text-center">
                                    {row[2]}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* BASKET DISTRIBUTION */}

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">

                <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 p-4 text-xl font-bold">
                    BASKET DISTRIBUTION
                </div>

                <table className="w-full border-collapse text-sm">

                    <thead>
                        <tr className="bg-sky-700 text-white">

                            <th className="border border-black p-3">
                                Basket Title
                            </th>

                            <th className="border border-black p-3">
                                Distribution Type
                            </th>

                            <th className="border border-black p-3">
                                Credits Required
                            </th>

                            <th className="border border-black p-3">
                                Credits Earned
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                Foreign Language
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                FCHSSM
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                2
                            </td>

                            <td className="bg-stone-100 text-green-700 font-bold border border-black p-3 text-center">
                                2
                            </td>
                        </tr>

                        <tr>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                Extra curricular activities
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                NGCR
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                2
                            </td>

                            <td className="bg-stone-100 text-green-700 font-bold border border-black p-3 text-center">
                                2
                            </td>
                        </tr>

                        <tr>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                HSM Elective
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                FCHSSM
                            </td>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">
                                3
                            </td>

                            <td className="bg-stone-100 text-green-700 font-bold border border-black p-3 text-center">
                                3
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            {/* ACADEMIC SUMMARY */}

            <div className="overflow-x-auto rounded-xl border border-white/10">

                <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-4 text-xl font-bold">
                    ACADEMIC SUMMARY
                </div>

                <table className="w-full border-collapse text-sm">

                    <thead>
                        <tr className="bg-orange-500 text-white">

                            <th className="border border-black p-3">
                                Credits Registered
                            </th>

                            <th className="border border-black p-3">
                                Credits Earned
                            </th>

                            <th className="border border-black p-3">
                                CGPA
                            </th>

                            <th className="border border-black p-3">
                                S Grades
                            </th>

                            <th className="border border-black p-3">
                                A Grades
                            </th>

                            <th className="border border-black p-3">
                                B Grades
                            </th>

                            <th className="border border-black p-3">
                                C Grades
                            </th>

                            <th className="border border-black p-3">
                                D Grades
                            </th>

                            <th className="border border-black p-3">
                                E Grades
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr>

                            <td className="bg-stone-100 text-black border border-black p-3 text-center">154</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">154</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center font-bold">7.97</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">6</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">21</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">21</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">13</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">5</td>
                            <td className="bg-stone-100 text-black border border-black p-3 text-center">1</td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}