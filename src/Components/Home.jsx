import React, { useState, useEffect } from "react"
import axios from "axios"
import { MagnifyingGlass } from "react-loader-spinner";

import img from '../img/book.png'
import moon from '../img/moon.png'

export default function Home() {

    const [loading, setLoading] = useState(false)

    const [word, setWord] = useState('study');

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
            .then(res => {
                if (res.data) {
                    setData(res.data)
                    setLoading(true)
                }

            })
            .catch(err => console.warn(err))
    }, [])



    function search() {
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
            .then(res => {
                if (res.data) {
                    setData(res.data)
                    setLoading(true)
                }
            })
            .catch(err => console.warn(err))

    }

    function searchEnter(event) {
        if (event.code.toLowerCase() === 'enter') {
            axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
                .then(res => {
                    if (res.data) {
                        setData(res.data)
                        setLoading(true)
                    }
                })
                .catch(err => console.warn(err))
        }
    }



    const [bodyColor, setBodyColor] = useState('white')
    function backgroundColor() {
        if (bodyColor == 'white') {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
            setBodyColor('dark')
        } else {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            setBodyColor('white')
        }
    }


    const [fontFamily, setFontFamily] = useState('')


    function changeFontFamily() {
        if (fontFamily == 'Sans Serif') {
            document.body.style.fontFamily = 'Sans Serif'
        } else if (fontFamily == 'Serif') {
            document.body.style.fontFamily = 'Serif'
        } else {
            document.body.style.fontFamily = 'Mono'
        }
    }

    console.log(data);


    return (
        <div className="container p-5" >
            <div className="navbar mb-5 ">
                <img src={img} className='img-fluid' alt="" />
                <div style={{ textAlign: "end" }}>
                    <select onChange={(e) => setFontFamily(e.target.value)} onClick={() => changeFontFamily()} style={{ border: "none" }} >
                        <option value="Sans Serif">Sans Serif</option>
                        <option value="Serif">Serif</option>
                        <option value="Mono">Mono</option>
                    </select> |
                    <div className="form-switch mb-3 " style={{ display: 'inline-block' }}>
                        <input onClick={() => backgroundColor()} className="form-check-input" style={bodyColor == 'dark' ? { backgroundColor: '#A445ED' } : { backgroundColor: '#757575' }} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    </div>
                    <img src={moon}  style={{ width: '12%', marginTop: '-4%', color:'red' }} />
                </div>
            </div>

            <>
                <input type="text" className="form-control searchInput" style={{ display: 'inline-block', width: '80%', border: 'none', borderBottom: '1px solid' }} value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={searchEnter} />
                <button onClick={search} style={{ position: "relative", right: "10%", border: 'none', backgroundColor: "white", backgroundColor: 'unset' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </>
            {
                loading == false ?
                    < MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />
                    :

                    <div className="row mt-5">
                        <div className="col-md-12">
                            {
                                data && data.map((post, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="row">
                                                <div className="col">
                                                    <h1>{post.word}</h1>
                                                    <p style={{ color: '#A445ED' }}>{post.phonetic}</p>
                                                </div>
                                                <div className="col pt-2">
                                                    {
                                                        post.phonetics.length > 0 ?

                                                            <>
                                                                {
                                                                    post.phonetics[0].audio.length > 0 ?
                                                                        <button style={{ border: 'none', backgroundColor: 'unset', color: '#A445ED' }} onClick={() => {
                                                                            new Audio(post.phonetics[0].audio).play()
                                                                        }}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                                            </svg>
                                                                        </button>
                                                                        :
                                                                        null
                                                                }
                                                            </>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                            <h2>{post.meanings[0].partOfSpeech}
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2%', width: "90%" }} height="1" fill="none">
                                                    <rect width="1200" height="1" fill="#E9E9E9" />
                                                </svg>
                                            </h2>
                                            <p style={{ color: 'gray' }}>Meaning</p>
                                            {
                                                post.meanings.length == 1 ?
                                                    <ul>
                                                        {post.meanings[0].definitions.map(post => {
                                                            return (
                                                                <li>{post.definition}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                    :
                                                    <>
                                                        {post.meanings.map(post => {
                                                            return (
                                                                <>
                                                                    <ul>{post.definitions.map(post => {
                                                                        return (
                                                                            <li>{post.definition}</li>
                                                                        )
                                                                    })}</ul>

                                                                    <p style={{ color: '#A445ED' }}><span style={{ color: "gray" }}>Synonyms</span> {post.synonyms}</p>

                                                                </>
                                                            )
                                                        })}
                                                    </>
                                            }

                                            {post.meanings.length > 1 ?
                                                <h2>{post.meanings[1].partOfSpeech}
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2%', width: "90%" }} height="1" fill="none">
                                                        <rect width="1200" height="1" fill="#E9E9E9" />
                                                    </svg>
                                                </h2>
                                                :
                                                null
                                            }
                                            <p style={{ color: 'gray' }}>Meaning</p>

                                            <ul>
                                                {/* <li>{post.meanings[1].definitions[0].definition}</li> */}
                                            </ul>
                                            {
                                                post.meanings.map((post) => {
                                                    return (
                                                        <>
                                                            {post.definitions.map((post, ind) => {
                                                                return (
                                                                    <>
                                                                        <p>{post.example}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </>

                                                    )
                                                })
                                            }
                                            <span style={{ fontSize: '80%' }}>Source <a href={post.sourceUrls}>{post.sourceUrls}</a> </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}