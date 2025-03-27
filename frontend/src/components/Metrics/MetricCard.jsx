function MetricCard({
    title = "Today",
    value = 49,
    color = "grey",
    bold = true,
}) {
    const boldTextClass = bold ? "font-semibold" : "font-normal"
    const bgColorClass = color === "grey" ? "bg-[#E0E0E0]" : "bg-[#FFC0CB]"
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <p className={`${boldTextClass} text-base`}>{title}</p>
                <div
                    className={`h-12 w-18 ${bgColorClass} rounded-md flex justify-center items-center`}
                >
                    <span className="font-bold text-lg">{value}</span>
                </div>
            </div>
        </>
    )
}

export default MetricCard
