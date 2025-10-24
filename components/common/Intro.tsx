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
        <div className="w-full max-w-responsive mx-auto flex justify-center items-center pt-16 pb-9">
            <div className="max-w-[75%] mx-auto text-center">
                {title && (
                    <h1 className="text-3xl font-header md:text-4xl font-bold mb-4 text-gray-800">
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <h2 className="text-lg font-semibold mb-8 text-gray-600">
                        {subtitle}
                    </h2>
                )}
                {description && (
                    <div className="mt-4">
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
                )}
            </div>
        </div>
    );
}