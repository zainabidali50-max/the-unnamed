import React from 'react'
import Image from 'next/image';
import { cards } from '@/constant/dashboard/News'

const News = () => {
  return (
    <>
      <section className="bg-black px-9 py-6">
        <div className="px-6 w-full">
          <h2 className="text-white text-xl font-semibold mb-6">
            Latest News & Events
          </h2>

          {/* Flex Row Full Width */}
          <div className="flex gap-6 w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#1e1e1e] text-white flex-1 rounded-xl shadow p-4 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-[180px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-0.5 rounded-md font-semibold">
                    {card.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4 space-y-2 text-sm flex flex-col flex-1">
                  <h3 className="font-semibold">{card.title}</h3>
                  {card.author && (
                    <p className="text-gray-400 text-xs">
                      {card.author} · {card.time}
                    </p>
                  )}
                  <p className="text-gray-300 text-sm flex-1">{card.desc}</p>

                  <button
                    className={`mt-3 px-6 py-2 rounded-md text-sm transition self-start
                      ${card.cta === 'Read more'
                        ? 'text-blue-400 hover:underline bg-transparent px-0 py-0'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                  >
                    {card.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
