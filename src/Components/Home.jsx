import React, { useState, useEffect } from "react"
import axios from "axios"
import { MagnifyingGlass } from "react-loader-spinner";

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

    console.log(bodyColor);

    return (
        <div className="container p-5" >
            <div class="form-switch mb-3">
                <label class="form-check-label" for="flexSwitchCheckChecked" style={{marginRight:'5%'}}>{ bodyColor == 'white' ? "Light" : "Dark" }</label>
                <input onClick={() => backgroundColor()} class="form-check-input" style={bodyColor == 'dark' ? { backgroundColor: '#A445ED' } : { backgroundColor: '#757575' } } type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
            <input type="text" className="form-control w-50" style={{ display: 'inline-block' }} value={word} onChange={(e) => setWord(e.target.value)} />
            <button onClick={search} style={{ position: "relative", right: "5%", border: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
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

                    <div className="row">
                        <div className="col-md-12">
                            {
                                data && data.map((post, index) => {
                                    return (
                                        <div key={index}>
                                            <h1>{post.word}</h1>
                                            <p>{post.phonetic}</p>
                                            <hr />
                                            <h2>{post.meanings[0].partOfSpeech}</h2>
                                            <p>Meaning</p>
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

                                                                    <p><span style={{ color: "gray" }}>Synonyms</span> {post.synonyms}</p>

                                                                </>
                                                            )
                                                        })}
                                                    </>
                                            }

                                            <hr />
                                            {post.meanings.length > 1 ?
                                                <h2>{post.meanings[1].partOfSpeech}</h2>
                                                :
                                                null
                                            }
                                            <p>Meaning</p>

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
                                                                        {/* <ul>
                                                                    <li>{post.definition}</li>
                                                                </ul> */}
                                                                        <p>{post.example}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </>
                                                        // <>
                                                        //     <h2>{post.meanings[1].partOfSpeech}</h2>
                                                        //     <p>Meaning</p>
                                                        //     <ul>
                                                        //         <li>{post.meanings[1].definitions[0].definition}</li>
                                                        //     </ul>
                                                        //     <p>{post.meanings[1].definitions[0].example}</p>

                                                        // </>

                                                    )
                                                })
                                            }
                                            <p><span style={{ color: "gray" }}>Source</span> <a href={post.sourceUrls}>{post.sourceUrls}</a></p>
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