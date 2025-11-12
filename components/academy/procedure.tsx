import React from "react";
import Image from "next/image";

type Stage = {
    number: number;
    title: string;
    subtitle: string;
    duration: string;
    bgColor: string;
    iconBgColor: string;
    borderColor: string;
    connectorColor: string;
    stageNumberColor: string;
    icon: string;
    text: string[];
    achivementTitle: string;
    achivement: string[];
    imageUrl: string;
};

type ProcedureProps = {
    title: string;
    steps: Stage[];
};

export default function Procedure({ title, steps }: ProcedureProps) {

    return (
        <section className="w-full max-w-responsive mx-auto mt-9 mb-16">
            {title && <h3 className="text-2xl font-semibold text-gray-800 font-header text-center mb-6">{title}</h3>}

            <div className="space-y-6 lg:space-y-8">
                {steps.map((stage: Stage, index: number) => {
                    console.log('stage', index, stage);

                    return (
                        <div key={index} className="relative">

                            <div className={`border-2 ${stage.borderColor} ${stage.bgColor} rounded-2xl p-6 lg:p-8 relative`}>
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`${stage.iconBgColor} rounded-full text-white p-3 w-14 h-14 flex-shrink-0`}>
                                                <div dangerouslySetInnerHTML={{ __html: stage.icon ?? "" }} />
                                            </div>

                                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                                <div>
                                                    <div className={`${stage.stageNumberColor ?? 'text-gray-600'} text-5xl mt-1 font-bold mb-4`}>
                                                        Stage {stage.number}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold mb-1">{stage.title}</h2>
                                                    <h3 className="text-lg text-gray-700 font-bold mb-2">{stage.subtitle}</h3>
                                                    {stage.duration && <p className="text-gray-700 text-lg mb-2">{stage.duration}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        {stage.text.map((feature: string, index: number) => (
                                            <p key={`feat-p-${index}`} className="text-base text-gray-900 ml-16">
                                                {feature}
                                            </p>
                                        ))}

                                        <div className="ml-16 mt-6">
                                            {stage.achivementTitle && <p className="text-lg font-bold mb-2">{stage.achivementTitle}</p>}
                                            <ul className="list-disc list-inside space-y-1 pl-2">
                                                {stage.achivement.map((highlight: string, i: number) => (
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
                    );
                })}
            </div>
        </section>
    );
}