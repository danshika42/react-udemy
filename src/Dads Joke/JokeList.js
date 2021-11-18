import axios from 'axios'
import uuid from 'uuid/v4'
import Joke from './Joke'
import React, { Component } from 'react'
import './Jokelist.css'

class JokeList extends Component {
    static defaultProps={
        numJokesToGet:10
    };

    constructor(props) {
        super(props)
    
        this.state = {
             jokes:JSON.parse(window.localStorage.getItem('jokes')||"[]"),
             loding:false
        }
        // this.handleVote=this.handleVote.bind(this);
        this.BtnGetJokes=this.BtnGetJokes.bind(this);
        this.seenJokes=new Set(this.state.jokes.map(j=>j.text));
        console.log(this.seenJokes);
    }
    

    componentDidMount(){
        if(this.state.jokes.length===0)
        this.getJokes();
    }

    async getJokes(){
        try{
            let jokes=[];
            while(jokes.length<this.props.numJokesToGet){
                let Jokes=await axios.get('https://icanhazdadjoke.com/',{headers:{Accept:'application/json'}})
                if(!this.seenJokes.has(Jokes.data.joke))
                jokes.push({text:Jokes.data.joke, votes:0 ,id:uuid()});
                else{
                console.log("found Duplicate")
                console.log(Jokes.data.joke)
                }
            }
            this.setState(st=>({
                jokes:[...st.jokes,...jokes],loding:false
            }))
            window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes));
        }catch(err){
            alert(err);
            this.setState({
                loding:false
            })
        }
    }

    BtnGetJokes(){
        this.setState({loding:true},this.getJokes)  
    }
    
    handleVote(id,delta){
        this.setState(st=>(
             {jokes:st.jokes.map(j=>
                j.id===id? {...j,votes:j.votes+delta}:j
            )}
        ), ()=>window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes))
        )
    }
    render() {
        let jokes=this.state.jokes.sort((a,b)=>b.votes-a.votes)

        if(this.state.loding){
            return(
                <div className='loader'></div>
            )
        }
        return (
            <div>
                <h1>Dad Jokes</h1>
                 {jokes.map(j=>{
                     return <Joke votes={j.votes} 
                                  text={j.text} 
                                  key={j.id} 
                                  upvote={()=>this.handleVote(j.id,1)} 
                                  downvote={()=>this.handleVote(j.id,-1)}
                            />
                 })}
                <button onClick={this.BtnGetJokes}>New Jokes</button>
            </div>
        )
    }
}

export default JokeList
