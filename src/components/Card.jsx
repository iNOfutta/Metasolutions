import Sample from "./Sample";

export default function Card({pic, title, description}){
    return(
        <>
            <div className="rounded overflow-hidden shadow-2xl">
            <Sample pic={pic} className="w-full"/>
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{title}</p>
                <p className="text-gray-700 text-base">
                {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#detail1</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#detail2</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#detail3</span>
            </div>
            </div>

        </>
    )
}