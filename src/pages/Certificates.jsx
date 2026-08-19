import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  Award,
  X,
} from "lucide-react";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("Grade Sheets");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const gradeSheets = [
    {
      title: "Semester 1 Grade Sheet",
      subtitle: "Semester 1",
      file: "/certificates/grade-sheets/semester-1-grade-sheet.pdf",
    },
    {
      title: "Semester 2 Grade Sheet",
      subtitle: "Semester 2",
      file: "/certificates/grade-sheets/semester-2-grade-sheet.pdf",
    },
    {
      title: "Semester 3 Grade Sheet",
      subtitle: "Semester 3",
      file: "/certificates/grade-sheets/semester-3-grade-sheet.pdf",
    },
    {
      title: "Semester 4 Grade Sheet",
      subtitle: "Semester 4",
      file: "/certificates/grade-sheets/semester-4-grade-sheet.pdf",
    },
    {
      title: "Semester 5 Grade Sheet",
      subtitle: "Semester 5",
      file: "/certificates/grade-sheets/semester-5-grade-sheet.pdf",
    },
    {
      title: "Semester 6 Grade Sheet",
      subtitle: "Semester 6",
      file: "/certificates/grade-sheets/semester-6-grade-sheet.pdf",
    },
    {
      title: "Semester 7 Grade Sheet",
      subtitle: "Semester 7",
      file: "/certificates/grade-sheets/semester-7-grade-sheet.pdf",
    },
    {
      title: "Semester 8 Grade Sheet",
      subtitle: "Semester 8",
      file: "/certificates/grade-sheets/semester-8-grade-sheet.pdf",
    },
  ];

  const transcripts = [
    {
      title: "Semester 1 Transcript",
      subtitle: "Semester 1",
      file: "/certificates/transcripts/semester-1-transcript.pdf",
    },
    {
      title: "Semester 2 Transcript",
      subtitle: "Semester 2",
      file: "/certificates/transcripts/semester-2-transcript.pdf",
    },
    {
      title: "Semester 3 Transcript",
      subtitle: "Semester 3",
      file: "/certificates/transcripts/semester-3-transcript.pdf",
    },
    {
      title: "Semester 4 Transcript",
      subtitle: "Semester 4",
      file: "/certificates/transcripts/semester-4-transcript.pdf",
    },
    {
      title: "Semester 5 Transcript",
      subtitle: "Semester 5",
      file: "/certificates/transcripts/semester-5-transcript.pdf",
    },
    {
      title: "Semester 6 Transcript",
      subtitle: "Semester 6",
      file: "/certificates/transcripts/semester-6-transcript.pdf",
    },
    {
      title: "Semester 7 Transcript",
      subtitle: "Semester 7",
      file: "/certificates/transcripts/semester-7-transcript.pdf",
    },
    {
      title: "Semester 8 Transcript",
      subtitle: "Semester 8",
      file: "/certificates/transcripts/semester-8-transcript.pdf",
    },
  ];

  const finalDocuments = [
    {
      title: "Provisional Certificate",
      subtitle: "Final Document",
      file: "/certificates/final-documents/provisional-certificate.pdf",
    },
    {
      title: "Transfer Certificate",
      subtitle: "Final Document",
      file: "/certificates/final-documents/transfer-certificate.pdf",
    },
    {
      title: "Degree Certificate",
      subtitle: "Final Document",
      file: "/certificates/final-documents/degree-certificate.pdf",
    },
    {
      title: "Consolidated Grade Sheet",
      subtitle: "Final Document",
      file: "/certificates/final-documents/consolidated-grade-sheet.pdf",
    },
  ];

  const categories = [
    {
      name: "Grade Sheets",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Transcripts",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: "Final Documents",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const getDocuments = () => {
    if (activeCategory === "Grade Sheets") {
      return gradeSheets;
    }

    if (activeCategory === "Transcripts") {
      return transcripts;
    }

    return finalDocuments;
  };

  const getIcon = () => {
    if (activeCategory === "Grade Sheets") {
      return <FileText className="w-6 h-6" />;
    }

    if (activeCategory === "Transcripts") {
      return <BookOpen className="w-6 h-6" />;
    }

    return <Award className="w-6 h-6" />;
  };

  return (
    <div className="p-6 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">
        CERTIFICATES
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mb-10">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                flex
                items-center
                gap-2
                px-8
                py-3
                rounded-lg
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white shadow-lg"
                    : "bg-slate-800 hover:bg-slate-700"
                }
              `}
            >
              {category.icon}
              {category.name}
            </button>
          ))}

        </div>

      </div>

      {/* Main Card */}
      <div className="rounded-xl border border-white/10 overflow-hidden">

        {/* Header */}
        <div
          className="
            bg-gradient-to-r
            from-blue-900
            via-blue-500
            to-blue-900
            p-4
            text-xl
            font-bold
            flex
            items-center
            gap-3
          "
        >
          {getIcon()}
          {activeCategory}
        </div>

        {/* Documents */}
        <div className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {getDocuments().map((document) => (

              <div
                key={document.title}
                className="
                  bg-slate-800
                  border
                  border-white/10
                  rounded-xl
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                "
              >

                {/* Card Header */}
                <div
                  className="
                    bg-gradient-to-r
                    from-blue-900
                    via-blue-500
                    to-blue-900
                    p-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="text-cyan-300">
                      {getIcon()}
                    </div>

                    <div>

                      <h2 className="font-bold text-lg">
                        {document.title}
                      </h2>

                      <p className="text-blue-100 text-sm">
                        {document.subtitle}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Card Body */}
                <div className="p-5">

                  <p className="text-gray-400 mb-5">
                    Official Academic Document
                  </p>

                  <div className="flex gap-3">

                    {/* View */}
                    <button
                      onClick={() => setSelectedDocument(document)}
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        text-white
                        font-semibold
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>

                    {/* Download */}
                    <a
                      href={document.file}
                      download
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-slate-700
                        border
                        border-slate-600
                        text-white
                        font-semibold
                        hover:bg-slate-600
                        transition-all
                        duration-300
                      "
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* PDF Viewer Modal */}
      {selectedDocument && (

        <div
          className="
            fixed
            inset-0
            bg-black/80
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >

          <div
            className="
              bg-slate-900
              rounded-xl
              w-full
              max-w-6xl
              h-[90vh]
              border
              border-blue-500
              shadow-2xl
              overflow-hidden
            "
          >

            {/* Modal Header */}
            <div
              className="
                flex
                justify-between
                items-center
                px-6
                py-4
                border-b
                border-slate-700
              "
            >

              <div>

                <h2 className="text-xl font-bold">
                  {selectedDocument.title}
                </h2>

                <p className="text-sm text-gray-400">
                  {selectedDocument.subtitle}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <a
                  href={selectedDocument.file}
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    font-semibold
                    hover:scale-105
                    transition-all
                  "
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                <button
                  onClick={() => setSelectedDocument(null)}
                  className="
                    text-red-400
                    hover:text-red-300
                    transition
                  "
                >
                  <X className="w-7 h-7" />
                </button>

              </div>

            </div>

            {/* PDF */}
            <div className="w-full h-[calc(90vh-80px)] bg-white">

              <iframe
                src={selectedDocument.file}
                title={selectedDocument.title}
                className="w-full h-full"
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
}