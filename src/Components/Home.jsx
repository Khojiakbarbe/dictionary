import React, { useState, useEffect } from "react"
import axios from "axios"


export default function Home() {

    const [word, setWord] = useState('keyboard');

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
            .then(res => {
                if (res.data) {
                    setData(res.data)
                }
            })
            .catch(err => console.warn(err))
    }, [])

    console.log(data);

    return (
        <div className="container">
            <input type="search" value={word} onChange={(e) => setWord(e.target.value)} />
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
                                    <h2>{post.meanings[1].partOfSpeech}</h2>
                                    <p>Meaning</p>

                                    <ul>
                                        <li>{post.meanings[1].definitions[0].definition}</li>
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
                                    <p><span style={{ color: "gray" }}>Source</span> {post.sourceUrls}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}