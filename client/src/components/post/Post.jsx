import React, {useState} from 'react'
import './post.css'
import { 
    MoreVert,
} from '@mui/icons-material'
import { Users } from "../../dummyData"

const Post = ( {post} ) => {
    const user = Users.filter(u => u.id === post.userId)[0]
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLike] = useState(false)

    const like_handler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }
    return (
        <div className='post'>
            <div className="post__wrapper">
                
                <div className="post__top">
                    
                    <div className="post__top__left">
                        <img src={user.profile_picture} alt="" className="post__profile__img" />
                        <span className="post__username">{user.username}</span>
                        <span className="post__date">{post.date}</span>
                    </div>

                    <div className="post__top__rigth">
                        <MoreVert />
                    </div>
                </div>

                <div className="post__center">
                    <span className="post__text">{post.desc}</span>
                    <img className='post__img' src={post.photo} alt="" />
                </div>


                <div className="post__bottom">
                    <div className="post__bottom__left">
                        <img className='like__icon' src="/assets/like.png" onClick={like_handler} alt="" />
                        <img className='like__icon' src="/assets/heart.png" onClick={like_handler} alt="" />
                        <span className='post__like__counter'>{like} people liked it</span>
                    </div>

                    <div className="post__bottom__right">
                        <span className="post__comment__text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Post