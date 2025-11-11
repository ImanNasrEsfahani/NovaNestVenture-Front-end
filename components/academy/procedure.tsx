import React from "react";
import Image from "next/image";

type Stage = {
    id: number;
    number: number;
    title: string;
    subtitle: string;
    duration: string;
    text: string[];
    achivementTitle: string;
    achivement: string[];
    imageUrl: string;
    icon: string;
    iconBgColor: string;
    borderColor: string;
    bgColor: string;
};

type ProcedureProps = {
    title: string;
    steps: Stage[];
};

export default function Procedure({ title, steps }: ProcedureProps) {

    return (
        <section className="w-full max-w-responsive mx-auto mt-9 mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 font-header text-center mb-6">
                {title}
            </h3>

            <div className="space-y-6 lg:space-y-8">
                {steps.map((stage, index) => (
                    <div key={index} className="relative">
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute left-8 top-20 bottom-0 w-0.5 ${
                                    stage.id === 1 ? "bg-green-300" : stage.id === 2 ? "bg-blue-300" : "bg-orange-300"
                                } hidden lg:block translate-y-8 z-100`}
                                style={{ height: "calc(100% + 2rem)" }}
                            />
                        )}

                        <div className={`border-2 ${stage.borderColor} ${stage.bgColor} rounded-2xl p-6 lg:p-8 relative`}>
                            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                <div className="flex-1">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`${stage.iconBgColor} rounded-full text-white p-3 w-16 h-16 flex-shrink-0`}>
                                            <div dangerouslySetInnerHTML={{ __html: stage.icon ?? "" }} />
                                        </div>

                                        <div className="flex-1">
                                            <div
                                                className={`${
                                                    stage.number === 1 ? "text-green-600" : stage.number === 2 ? "text-blue-600" : "text-orange-600"
                                                } text-6xl font-bold mb-4`}
                                            >
                                                Stage {stage.number}
                                            </div>
                                            <h2 className="text-2xl font-bold mb-1">{stage.title}</h2>
                                            <h3 className="text-lg text-gray-700 font-bold mb-2">{stage.subtitle}</h3>
                                            {stage.duration && <p className="text-gray-700 text-lg mb-2">{stage.duration}</p>}
                                        </div>
                                    </div>

                                    {stage.text.map((feature, fi) => (
                                        <p key={`feat-p-${fi}`} className="text-base text-gray-900 ml-16">
                                            {feature}
                                        </p>
                                    ))}

                                    <div className="ml-16 mt-6">
                                        {stage.achivementTitle && <p className="text-lg font-bold mb-2">{stage.achivementTitle}</p>}
                                        <ul className="list-disc list-inside space-y-1 pl-2">
                                            {stage.achivement.map((highlight, i) => (
                                                <li key={i} className="text-base text-gray-900">
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="lg:w-64 flex-shrink-0">
                                    <div className="size-full relative overflow-hidden rounded-xl">
                                        {stage.imageUrl && (
                                            <Image
                                                src={stage.imageUrl}
                                                alt={stage.title}
                                                className="w-full h-full object-cover"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 256px"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}