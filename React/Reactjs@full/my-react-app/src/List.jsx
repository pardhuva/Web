import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const fruits = props.items;

    //fruits.sort((a,b) => a.name.localCompare(b.name));  /* fruits to sort lexicographically */ //Alphabetical
    //fruits.sort((a,b) => b.name.localCompare(a.name));  // Reverse Alphabetical 
    //fruits.sort((a,b) => a.calories - b.calories)  //Numeric
    //fruits.sort((a,b) => b.calories - a.calories)  //Reverse Numeric
    
    //const lowcal = fruits.filter(fruit => fruits.calories < 100);
    //const highcal = fruits.filter(fruit => fruits.calories >= 100);
    
    const listItems = fruits.map(fruit => <li key = {fruit.id}>{fruit.name} : &nbsp;  <b>{fruit.calories}</b></li>);

    return (
        <>
          <h3>{category}</h3>
          <ol>{listItems}</ol>;
        </>
    );
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropType.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                            calories: PropTypes.number})),
}
List.defaultProps = {
    category: "category",
    items:[],
}

export default List