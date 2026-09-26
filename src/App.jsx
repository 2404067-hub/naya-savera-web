import { motion } from "framer-motion";
import {
  Droplet,
  ShieldCheck,
  Brain,
  Activity,
  ArrowDown,
  FileText,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-cream">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Droplet className="text-primary" size={40} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-primary"
          >
            NAYA SAVERA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl mt-6 text-soft"
          >
            Health screening, where life happens.
          </motion.p>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            AI-assisted urine-strip screening through an automated
            public-health kiosk.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="#system"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition"
            >
              Explore the System
            </a>

            <a
              href="#report"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition"
            >
              View Sample Report
            </a>

          </div>

          <div className="mt-12 flex justify-center">
            <a href="#problem">
              <ArrowDown className="text-primary animate-bounce" size={28} />
            </a>
          </div>

        </div>
      </section>


      {/* PROBLEM */}
      <section
        id="problem"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-ink">
            Why does screening happen too late?
          </h2>

          <p className="text-center text-soft mt-4 max-w-2xl mx-auto">
            NAYA SAVERA brings accessible health screening into everyday
            public spaces.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="p-8 rounded-2xl border bg-cream text-center">
              <Activity
                className="mx-auto text-primary"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                Early Screening
              </h3>

              <p className="text-soft mt-3">
                Identify abnormal urine-strip readings at an early stage.
              </p>
            </div>


            <div className="p-8 rounded-2xl border bg-cream text-center">
              <Brain
                className="mx-auto text-primary"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                AI-Assisted
              </h3>

              <p className="text-soft mt-3">
                Camera-based image analysis helps interpret the test strip.
              </p>
            </div>


            <div className="p-8 rounded-2xl border bg-cream text-center">
              <ShieldCheck
                className="mx-auto text-primary"
                size={40}
              />

              <h3 className="text-xl font-bold mt-5">
                Private & Accessible
              </h3>

              <p className="text-soft mt-3">
                Designed for convenient screening with dignity and privacy.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section
        id="system"
        className="py-24 px-6 bg-primary text-white"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            How NAYA SAVERA Works
          </h2>

          <p className="text-center mt-4 opacity-80">
            From sample collection to digital screening report.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mt-14">

            {[
              "Urine Sample",
              "Test Strip",
              "Camera Capture",
              "AI / ML Analysis",
              "Digital Report",
            ].map((step, index) => (

              <div
                key={step}
                className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
              >

                <div className="w-12 h-12 mx-auto rounded-full bg-white text-primary flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <p className="mt-5 font-semibold">
                  {step}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* PARAMETERS */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-ink">
            Screening Parameters
          </h2>

          <p className="text-soft mt-4">
            The prototype is designed around commonly measured urine-strip
            parameters.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">

            {[
              "pH",
              "Glucose",
              "Protein",
              "Ketones",
              "Blood",
              "Leukocytes",
              "Nitrite",
              "Bilirubin",
              "Specific Gravity",
              "Urobilinogen",
            ].map((item) => (

              <div
                key={item}
                className="p-5 rounded-xl bg-cream border font-semibold text-primary"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SAMPLE REPORT */}
      <section
        id="report"
        className="py-24 px-6 bg-cream"
      >

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <FileText
              className="mx-auto text-primary"
              size={45}
            />

            <h2 className="text-4xl font-bold text-ink mt-5">
              Sample Screening Report
            </h2>

            <p className="text-soft mt-3">
              Example interface for the NAYA SAVERA prototype.
            </p>

          </div>


          <div className="bg-white rounded-2xl shadow-lg border mt-12 p-8">

            <div className="flex justify-between items-center border-b pb-6">

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  NAYA SAVERA
                </h3>

                <p className="text-soft mt-1">
                  Screening Report
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-soft">
                  Test ID
                </p>

                <p className="font-semibold">
                  NS-DEMO-001
                </p>
              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-4 mt-8">

              {[
                ["pH", "6.2"],
                ["Specific Gravity", "1.020"],
                ["Glucose", "Negative"],
                ["Protein", "Trace"],
                ["Ketones", "Negative"],
                ["Blood", "Negative"],
                ["Leukocytes", "Negative"],
                ["Nitrite", "Negative"],
              ].map(([parameter, value]) => (

                <div
                  key={parameter}
                  className="flex justify-between p-4 rounded-lg bg-cream border"
                >
                  <span className="font-medium">
                    {parameter}
                  </span>

                  <span className="font-semibold text-primary">
                    {value}
                  </span>
                </div>

              ))}

            </div>


            <div className="mt-8 p-5 rounded-xl bg-attention/10 border border-attention">

              <p className="font-bold text-attention">
                Prototype Result
              </p>

              <p className="text-soft mt-1">
                Example screening output. This prototype does not provide
                a medical diagnosis.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="py-28 px-6 bg-primary text-white text-center">

        <h2 className="text-5xl font-bold">
          Every drop carries a truth.
        </h2>

        <p className="text-xl mt-6 opacity-90">
          NAYA SAVERA helps you hear it.
        </p>

        <p className="mt-3 opacity-80">
          Privately. Freely. With dignity.
        </p>

      </section>


      {/* FOOTER */}
      <footer className="py-8 bg-gray-900 text-white text-center">

        <p className="font-semibold">
          NAYA SAVERA
        </p>

        <p className="text-sm text-gray-400 mt-2">
          AI-assisted public health screening prototype
        </p>

        <p className="text-sm text-gray-500 mt-3">
          Made by KIIT Students
        </p>

      </footer>

    </div>
  );
}

export default App;