import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface MarqueeType {
    id: number,
    slug: string,
    nameBn: string,
    category: string,
    categoryNameBn: string,
    categoryIcon: string,
    unit: string,
    image: string,
    today: number,
    yesterday: number,
    lastWeek: number,
    lastMonth: number,
    change: {
        dir: string,
        pct: number
    },
    markets: {
        market: string,
        division: string,
        min: number,
        max: number
    }[];
}
const MarqueeLink = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data: MarqueeType[] = await res.json()
    console.log(data)

    return (
        <MarqueeText direction="right" pauseOnHover={true} duration={8}>
            <div className="flex">
                {
                    data.map((p, index: number) => (
                        <div key={index} className="flex border gap-2 text-[1rem] pt-2 pb-2 pl-4 pr-4 border-gray-100">
                            <h4>{p.categoryIcon}</h4>
                            <h4>{p.nameBn}</h4>
                            <h4 className="ml-2">{p.today} টাকা / {p.unit}</h4>
                            <h4
                                className={`ml-2 ${p.change.dir === "down"
                                        ? "text-red-500"
                                        : p.change.dir === "up"
                                            ? "text-green-500"
                                            : "text-gray-500"
                                    }`}
                            >
                                {p.change.dir === "down"
                                    ? "▲"
                                    : p.change.dir === "up"
                                        ? "▼"
                                        : "—"}{" "}
                                {p.change.pct}%
                            </h4>
                        </div>
                    ))
                }
            </div>

        </MarqueeText>
    );
};

export default MarqueeLink;