type Props = {
    title: string;
    subtitle: string;
    description: string | string[];
};

export default function Intro({
    title,
    subtitle,
    description
}: Props) {
    const isArray = Array.isArray(description);

    return (
        <div className="w-full max-w-responsive mx-auto flex justify-center items-center pt-32 pb-16">
            <div className="max-w-[75%] mx-auto text-center">
                <h2 className="text-3xl font-header md:text-5xl font-bold mb-6 text-gray-800">
                    {title}
                </h2>
                <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
                    {subtitle}
                </h3>
                {isArray ? (
                    (description as string[]).map((t, i) => (
                        <p className="text-xl md:text-2xl font-header" key={i}>
                            {t}
                        </p>
                    ))
                ) : (
                    <p className="text-xl md:text-2xl font-header">{description}</p>
                )}
            </div>
        </div>
    );
}