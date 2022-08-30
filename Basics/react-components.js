import React from "react";

class ShoppingList extends React.Component {
    // The component includes a render function that contains the html element to be displayed on the page
    render() {
        // When multiline in jsx, surround with brackets
        // Note that we could return React.createElement(name, attributes, children) if the jsx syntax was not wanted
        return (
            <div className="shopping-list">
            {/* The properties passed with the component are stored in `this.props` */}
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}


// Example Usage
// <ShoppingList name="Mark" />
