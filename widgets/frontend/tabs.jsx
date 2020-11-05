import React from 'react';


class Tabs extends React.Component{
    constructor(props){ //props = [{ content: title }, { content: title }];
        super(props);
        this.tabs = props["tabs"];
        this.state  = {selected : 0};
        this.addContent = this.addContent.bind(this);
    }
    addContent (idx) {
        this.setState( {selected: idx});
    }
    render(){
        const title = this.tabs.map((object, idx)=>{
        return (
                <h1 key={idx} onClick ={() => this.addContent(idx)}>{object["title"]}</h1> 
                )
        }) 
        const content = this.tabs.map((object, idx)=>{
        return (
          <article key={idx} className={this.state.selected === idx ? 'show' : 'content-tab'}>
            {object["content"]}
          </article>
        );
        }) 
        return(
            <div>
                <div className="title-tab">
                    {title}
                </div>
                <div className="">
                    {content}
                </div>
                    
            </div>
        )
    }
}

export default Tabs;

