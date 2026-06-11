import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    User,
    GraduationCap,
    Users,
    BadgeInfo,
} from "lucide-react";

function Section({ title, icon, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
            <button
                onClick={() => setOpen(!open)}
                className="
          w-full
          flex
          items-center
          justify-between
          px-6
          py-4
          bg-gradient-to-r
          from-blue-900
          via-blue-500
          to-blue-900
          text-white
        "
            >
                <div className="flex items-center gap-3">
                    {icon}
                    <span className="font-semibold">{title}</span>
                </div>

                {open ? <ChevronUp /> : <ChevronDown />}
            </button>

            {open && (
                <div className="bg-slate-900 p-6 text-white">
                    {children}
                </div>
            )}
        </div>
    );
}

export default function Profile() {
    return (
        <div className="p-6 text-white">
            {/* Profile Header */}

            <div
                className="
          mb-8
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Profile Photo */}

                    <div className="flex flex-col items-center">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="
                h-36
                w-36
                rounded-xl
                border-2
                border-blue-500
                object-cover
              "
                        />

                        <h3 className="mt-3 text-lg font-semibold">
                            GOTAM SAI VARSHITH
                        </h3>
                    </div>

                    {/* Left Details */}

                    <div className="space-y-6">
                        <div>
                            <span className="font-semibold text-red-400">
                                REGISTER NUMBER:
                            </span>

                            <span className="ml-2">22BCE1605</span>
                        </div>

                        <div>
                            <span className="font-semibold text-red-400">
                                PROGRAM & BRANCH:
                            </span>

                            <span className="ml-2">
                                BTECH - Computer Science and Engineering
                            </span>
                        </div>
                    </div>

                    {/* Right Details */}

                    <div className="space-y-6">
                        <div>
                            <span className="font-semibold text-red-400">
                                VIT EMAIL:
                            </span>

                            <span className="ml-2 break-all">
                                gotamsai.varshith2022@vitstudent.ac.in
                            </span>
                        </div>

                        <div>
                            <span className="font-semibold text-red-400">
                                SCHOOL NAME:
                            </span>

                            <span className="ml-2">
                                School of Computer Science and Engineering
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dropdown Sections */}

            <Section
                title="PERSONAL INFORMATION"
                icon={<User />}
            >
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">

                        <tbody>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium w-1/2">
                                    APPLICATION NUMBER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    2022169995
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    STUDENT NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    GOTAM SAI VARSHITH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    DATE OF BIRTH
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    08-Mar-2005
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    GENDER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    MALE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    NATIVE LANGUAGE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    TELUGU
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    NATIVE STATE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    BLOOD GROUP
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    O+
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    PHYSICALLY CHALLENGED
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NO
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    COMMUNITY
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    OBC / BC
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    RELIGION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    HINDU
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    CASTE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    YADAV
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    NATIONALITY
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    INDIAN
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    HOSTELLER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    HOSTELLER
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    AADHAR NUMBER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    403095337221
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    MOBILE NUMBER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    8919411353
                                </td>
                            </tr>

                            {/* Current Address Header */}
                            <tr>
                                <td
                                    colSpan="2"
                                    className="
bg-blue-400
text-center
text-black
font-bold
text-lg
p-3
border
border-gray-500
"
                                >
                                    CURRENT ADDRESS
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">STREET NAME</td>
                                <td className="bg-amber-50 text-black p-3">25-2-300</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">AREA NAME</td>
                                <td className="bg-amber-50 text-black p-3">
                                    3RD CROSS ROAD, NEW MILITARY COLONY
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">CITY</td>
                                <td className="bg-amber-50 text-black p-3">NELLORE</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">STATE</td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">COUNTRY</td>
                                <td className="bg-amber-50 text-black p-3">INDIA</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">PINCODE</td>
                                <td className="bg-amber-50 text-black p-3">524004</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">
                                    PHONE NUMBER [LAND LINE]
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    8919411353
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">EMAIL</td>
                                <td className="bg-amber-50 text-black p-3">
                                    varshithsai1085@gmail.com
                                </td>
                            </tr>

                            {/* Permanent Address Header */}
                            <tr>
                                <td
                                    colSpan="2"
                                    className="
bg-blue-400
text-center
text-black
font-bold
text-lg
p-3
border
border-gray-500
"
                                >
                                    PERMANENT ADDRESS
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">STREET NAME</td>
                                <td className="bg-amber-50 text-black p-3">25-2-300</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">AREA NAME</td>
                                <td className="bg-amber-50 text-black p-3">
                                    3RD CROSS ROAD, NEW MILITARY COLONY
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">CITY</td>
                                <td className="bg-amber-50 text-black p-3">NELLORE</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">STATE</td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">COUNTRY</td>
                                <td className="bg-amber-50 text-black p-3">INDIA</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">PINCODE</td>
                                <td className="bg-amber-50 text-black p-3">524004</td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">
                                    PHONE NUMBER [LAND LINE]
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    8919411353
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">EMAIL</td>
                                <td className="bg-amber-50 text-black p-3">
                                    varshithsai1085@gmail.com
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3">
                                    FRIEND MOBILE NUMBER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    9550742317
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Section>

            <Section
                title="EDUCATIONAL INFORMATION"
                icon={<GraduationCap size={20} />}
            >
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">

                        <tbody>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium w-1/2">
                                    APPLIED DEGREE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    UG
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    EDUCATIONAL QUALIFICATION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    12TH / INTERMEDIATE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    BRANCH / GROUP STUDIED
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    MPC
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    SCHOOL NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NARAYANA JUNIOR COLLEGE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    MEDIUM OF STUDY
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    ENGLISH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    BOARD / UNIVERSITY
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH BOARD OF INTERMEDIATE EDUCATION
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    REGISTER NO / ROLL NO
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    2208224178
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    CLASS OBTAINED
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    1ST CLASS
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    YEAR OF PASSING / PASSED
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    2022
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    MONTH OF PASSING / PASSED
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    MAR
                                </td>
                            </tr>

                            <tr>
                                <td
                                    colSpan="2"
                                    className="
                            bg-blue-400
                            text-center
                            text-black
                            font-bold
                            text-lg
                            p-3
                            border
                            border-gray-500
                        "
                                >
                                    SCHOOL / COLLEGE ADDRESS
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    AREA NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NARASIMHA KONDA
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    CITY / DISTRICT NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NELLORE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    STATE NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    PINCODE / ZIPCODE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    524004
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    PHONE NUMBER [LAND LINE]
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    -
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    BREAK IN STUDY
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NO
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    REASON
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    -
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </Section>

            <Section
                title="FAMILY INFORMATION"
                icon={<Users size={20} />}
            >
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">

                        <tbody>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium w-1/2">
                                    NO. OF BROTHERS
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    0
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    NO. OF SISTERS
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    1
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    IF BROTHER/SISTER STUDYING IN VIT
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NO
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    STUDYING DETAILS
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    IF BROTHER/SISTER STUDIED IN VIT
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NO
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    STUDIED DETAILS
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                </td>
                            </tr>

                            {/* Father Details */}

                            <tr>
                                <td
                                    colSpan="2"
                                    className="
                            bg-blue-400
                            text-center
                            text-black
                            font-bold
                            text-lg
                            p-3
                            border
                            border-gray-500
                        "
                                >
                                    FATHER DETAILS
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FATHER NAME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    GOTAM VENKATESWARLU
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    QUALIFICATION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    M.TECH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    OCCUPATION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    PRIVATE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    ORGANIZATION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    HIGH WAY CONSTRUCTION
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    EMP. ID (IF EMPLOYED IN VIT)
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    MOBILE NUMBER
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    9949358739
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    EMAIL
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    m9940196@gmail.com
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    ANNUAL INCOME
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    &lt;50000
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    OFFICIAL ADDRESS (AREA NAME)
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    VEDHAYAPALEM
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    STATE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    ANDHRA PRADESH
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    CITY / DISTRICT
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    NELLORE
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    PINCODE / ZIPCODE
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    524004
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    PHONE NUMBER [LAND LINE]
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    DESIGNATION
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    SR. QUALITY CUM MATERIAL ENGINEER
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    GUARDIAN INFO
                                </td>
                                <td className="bg-amber-50 text-black p-3">
                                    FATHER
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </Section>

            <Section
                title="PROCTOR INFORMATION"
                icon={<BadgeInfo size={20} />}
            >
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">

                        <tbody>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium w-[30%]">
                                    FACULTY ID
                                </td>

                                <td className="bg-amber-50 text-black p-3">
                                    52284
                                </td>

                                <td
                                    rowSpan="4"
                                    className="bg-amber-50 text-center align-top p-2 w-[180px]"
                                >
                                    <img
                                        src="/proctor.jpg"
                                        alt="Proctor"
                                        className="
                                w-28
                                h-32
                                object-cover
                                border
                                border-blue-500
                                rounded
                                mx-auto
                            "
                                    />
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY NAME
                                </td>

                                <td className="bg-amber-50 text-black p-3">
                                    BRINDHA
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY DESIGNATION
                                </td>

                                <td className="bg-amber-50 text-black p-3">
                                    Assistant Professor Sr. Grade 2
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    SCHOOL
                                </td>

                                <td className="bg-amber-50 text-black p-3">
                                    School of Computer Science and Engineering
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    CABIN
                                </td>

                                <td
                                    colSpan="2"
                                    className="bg-amber-50 text-black p-3"
                                >
                                    AB3--2F--AB 3 - 2F Main 211, Cabin No. 6
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY DEPARTMENT
                                </td>

                                <td
                                    colSpan="2"
                                    className="bg-amber-50 text-black p-3"
                                >
                                    School of Computer Science and Engineering
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY EMAIL
                                </td>

                                <td
                                    colSpan="2"
                                    className="bg-amber-50 text-black p-3"
                                >
                                    brindha.s@vit.ac.in
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY INTERCOM
                                </td>

                                <td
                                    colSpan="2"
                                    className="bg-amber-50 text-black p-3"
                                >
                                </td>
                            </tr>

                            <tr className="border border-gray-700">
                                <td className="bg-gray-700 p-3 font-medium">
                                    FACULTY MOBILE NUMBER
                                </td>

                                <td
                                    colSpan="2"
                                    className="bg-amber-50 text-black p-3"
                                >
                                    9843963208
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </Section>
        </div>
    );
}