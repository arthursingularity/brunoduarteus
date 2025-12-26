import { useState } from "react";
import emailjs from "emailjs-com";

function Form() {
    const [step, setStep] = useState(1); // current step
    const totalSteps = 4;
    const RadioGroup = ({ label, options }) => (
        <div className="flex flex-col space-y-2 mt-3">
            <p>{label}</p>
            <div className="flex flex-col space-y-2 pl-2">
                {options.map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer hover:text-bgreen"
                    >
                        <input
                            type="radio"
                            name={label}
                            value={opt}
                            checked={answers[label] === opt}
                            onChange={(e) => handleChange(label, e.target.value)}
                            className="accent-bgreen cursor-pointer"
                        />
                        <span>{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    const femaleFields = [
        "Do you have an active menstrual cycle?",
        "Is your cycle usually:",
        "Approximate date of your last menstruation:",
        "During the menstrual or premenstrual period, you usually:",
        "If you experience symptoms, do they interfere with your training?",
    ];

    // Inputs separated by step
    const steps = [
        [
            "Full name",
            "Gender",
            "Social media (e.g.: @bruno - Instagram)",
            "Email",
            "Phone number",
            "Date of birth",
            "Address",
            "Occupation",
            "Resting heart rate",
            "Weight",
            "Height",
            "How did you find me or my online coaching?",
            "What do you expect from the online coaching?",
            "What is your main goal? If you have more than one, list them.",
        ],
        [
            "Where do you plan to train? (e.g.: gym, home with equipment, condo gym, etc.)",
            "If you answered home or condo gym above, what equipment do you have?",
            "What's your favorite cardio machine? Treadmill, bike, elliptical… if another, please mention it.",
            "How many days per week can you train?",
            "How many hours per day can you train?",
            "Do you currently practice strength training?",
            "How long have you been training?",
            "If you stopped training, how long have you been off?",
            "If you currently train, tell me a bit about your routine (split type, number of exercises per day, etc.)",
            "Is there any part of your body that bothers you aesthetically? If yes, which one(s)?",
            "From your perception, do you gain muscle easily?",
            "How many meals do you eat per day?",
            "Do you follow any diet and/or take supplements? Explain.",
        ],
        [
            "Do you smoke? How many cigarettes per day? If you quit, how long ago?",
            "Do you consume alcoholic beverages? Which ones and how often?",
            "Do you have high cholesterol, triglycerides, or blood sugar?",
            "Do you have any heart condition? Any relatives with heart problems? Who?",
            "Are you hypertensive?",
            "Are you diabetic, or do you have any relatives who are?",
            "Do you have any lung problems?",
            "Do you take any medication? Which one(s)?",
            "Have you ever felt dizzy during exercise?",
        ],
        [
            "Do you practice any other physical activity? If yes, which one and how often?",
            "Have you had any surgeries? Which one(s)?",
            "Do you have back pain, joint pain, or muscle pain?",
            "Do you have any medical recommendations regarding physical activity? If yes, what?",
            "Were you an overweight child or teenager?",
            "Are your parents overweight or obese?",
            "Additional notes and comments",
        ],
    ];

    const [answers, setAnswers] = useState({});

    const handleChange = (label, value) => {
        setAnswers(prev => ({ ...prev, [label]: value }));
    };

    const handleNext = () => {
        let currentStepFields = [...steps[step - 1]];
    
        // 👉 Só adiciona campos femininos NO STEP 1
        if (step === 1 && answers["Gender"] === "Female") {
            currentStepFields = currentStepFields.concat(femaleFields);
        }
    
        const hasEmptyField = currentStepFields.some(
            label => !answers[label] || answers[label].trim() === ""
        );
    
        if (hasEmptyField) {
            alert("Please fill in all required fields before continuing.");
            return;
        }
    
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        // Ensure all fields are filled before submission
        const allFields = steps.flat();
        const hasEmptyField = allFields.some(label => !answers[label] || answers[label].trim() === "");

        if (hasEmptyField) {
            alert("Please fill in all fields before submitting the form.");
            return;
        }

        const nomeCompleto = answers["Full name"] || "No name";
        const message = Object.entries(answers)
            .map(([question, answer]) => `<b>${question}:</b> ${answer}<br><br>`)
            .join("");

        const templateParams = {
            to_email: "brunoassispersonal@gmail.com",
            subject: `Online Coaching - Assessment from ${nomeCompleto}`,
            message: message,
            name: nomeCompleto,
        };

        emailjs
            .send(
                "service_6oz7wms",
                "template_qf8v6yq",
                templateParams,
                "NrYw_EiFWBGHgsaVH"
            )
            .then(() => {
                alert("Form successfully submitted! 🎉");
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred while sending.");
            });
    };

    const progressWidth = `${(step / totalSteps) * 100}%`;

    return (
        <div className="font-light flex justify-center text-white p-6">
            <div className="w-[500px]">
                {/* Title */}
                <p className="text-center text-bgreen text-[36px] font-medium">
                    Assessment
                </p>
                <hr className="border-1 border-neutral-500 mt-8" />
                <p className="text-center mt-5">
                    Please complete the questionnaire so we can achieve the best possible results.
                </p>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 h-2 rounded mt-8">
                    <div
                        className="bg-bgreen h-2 rounded transition-all duration-500"
                        style={{ width: progressWidth }}
                    ></div>
                </div>
                <p className="text-center mt-2">Step {step} of {totalSteps}</p>

                {/* Form */}
                <div className="flex justify-center mt-10">
                    <form className="w-full">
                        {/* Inputs container */}
                        <div className="space-y-4">
                            {steps[step - 1].map((label, index) => (
                                <div key={index} className="flex flex-col space-y-1 relative">
                                    <p>{label}</p>

                                    {/* GENDER SELECT */}
                                    {label === "Gender" ? (
                                        <>
                                            <select
                                                value={answers[label] || ""}
                                                onChange={(e) => handleChange(label, e.target.value)}
                                                className={`bg-transparent border rounded h-[43px] pl-2 pr-8 outline-none
                                                            text-white appearance-none cursor-pointer
                                                            border-neutral-300 hover:border-bgreen focus:border-bgreen`}
                                            >
                                                <option value="" disabled className="text-gray-400">
                                                    Select
                                                </option>
                                                <option value="Male" className="text-black">Male</option>
                                                <option value="Female" className="text-black">Female</option>
                                                <option value="Other" className="text-black">Other</option>
                                                <option value="Prefer not to say" className="text-black">
                                                    Prefer not to say
                                                </option>
                                            </select>

                                            {/* Custom arrow */}
                                            <span className="pointer-events-none absolute right-3 top-[34px] text-bgreen">
                                                ▼
                                            </span>

                                            {/* 🔥 FEMALE CONDITIONAL BLOCK */}
                                            {answers["Gender"] === "Female" && (
                                                <div className="mt-4 space-y-4 border-l border-bgreen pl-4">

                                                    <RadioGroup
                                                        label="Do you have an active menstrual cycle?"
                                                        options={["Yes", "No"]}
                                                    />

                                                    <RadioGroup
                                                        label="Is your cycle usually:"
                                                        options={["Regular", "Irregular", "Not sure"]}
                                                    />

                                                    <div className="flex flex-col space-y-1">
                                                        <p>Approximate date of your last menstruation:</p>
                                                        <input
                                                            value={answers["Approximate date of your last menstruation:"] || ""}
                                                            onChange={(e) =>
                                                                handleChange(
                                                                    "Approximate date of your last menstruation:",
                                                                    e.target.value
                                                                )
                                                            }
                                                            placeholder="DD/MM/YYYY"
                                                            inputMode="numeric"
                                                            maxLength={10}
                                                            className="bg-transparent border rounded h-[43px] caret-bgreen pl-2 outline-none
                  border-neutral-300 hover:border-bgreen focus:border-bgreen"
                                                        />
                                                    </div>

                                                    <RadioGroup
                                                        label="During the menstrual or premenstrual period, you usually:"
                                                        options={[
                                                            "Maintain the same energy and strength",
                                                            "Feel a drop in energy or strength",
                                                            "Feel pain, cramps or other relevant symptoms",
                                                        ]}
                                                    />

                                                    <RadioGroup
                                                        label="If you experience symptoms, do they interfere with your training?"
                                                        options={["No", "Slightly", "A lot"]}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        /* DEFAULT INPUT */
                                        <input
                                            value={answers[label] || ""}
                                            onChange={(e) => handleChange(label, e.target.value)}
                                            className="bg-transparent border rounded h-[43px] caret-bgreen pl-2 outline-none
          border-neutral-300 hover:border-bgreen focus:border-bgreen"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between mt-10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-neutral-400"
                                >
                                    Back
                                </button>
                            ) : (
                                <div></div>
                            )}

                            <button
                                type="button"
                                onClick={step === totalSteps ? handleSubmit : handleNext}
                                className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-verde"
                            >
                                {step === totalSteps ? "Finish" : "Next"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
