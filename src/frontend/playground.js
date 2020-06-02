// "start": "serve -s build",

function Actors(props) {
    return (
        <div>{
            props.actors.map(actor => (
                <div key={actor.name}>
                    {actor.name} ({actor.age})
                </div>
            ))            
        }
        </div>
    );
}

const actors = shallow(
    <Actors actors={[
        { name: 'Arnold', age: 71 }, { name: 'Silvester', age: 72 }
    ]} />
);