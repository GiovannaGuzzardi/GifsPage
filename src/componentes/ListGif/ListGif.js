
import { useLike } from "../../context/curtidas";



export default function Img({ arr }) {
    const { like, setLike } = useLike()


    return (
        <>
            {arr.map((item, index) => {
                return (
                    <div className={`itemGif`}>
                        <img key={item.id} src={item.images.downsized.url} alt={item.title} />
                        <button className="like" id={index} onClick={() => {
                            if (like.includes(item.id)) {
                                setLike(like.filter((outr) => outr !== item.id))
                            } else {
                                setLike([...like, item.id])
                            }
                        }
                        }><i class={like.includes(item.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i> </button>
                    </div>
                )
            })}
        </>
    )
}