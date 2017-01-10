import React, { Component } from 'react';

const storkImage = 'http://www.ciconia.ro/allo.jpg';
const ballonImage = 'http://www.balon.ro/31074-home_default/balon-latex-pale-blue-11-inch-28-cm-qualatex-43762.jpg';
const bananaImage = 'http://www.arrms.org/media/blogs/blog/banana.jpg?mtime=1417645870'

class Game extends Component {
    render() {
        return (
            <div>
                <img src={bananaImage} />
                <div onClick={() => alert('balon')}>BALON</div>
                <div onClick={() => alert('barză')}>BARZĂ</div>
                <div onClick={() => alert('banană')}>BANANĂ</div>
            </div>
        );
    }
}

export default Game;