import React from 'react';
import './Graphic.css';
import $ from 'jquery';
import ScriptTag from 'react-script-tag';
import test from '../../js/test.js';
// import svg3dtagcloud from '../../js/svg3dtagcloud.js';

// import {Helmet} from 'react-helmet';
class Graphic extends React.Component {

    componentDidMount () {
        // const script = document.createElement("script");
        // script.src = `~/js/jquery.svg3dtagcloud.min.js`;
        // script.async = true;
        // document.body.appendChild(script);
        // var entries = [ 

        //     { image: './img/Basket.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top' },
        //     { image: './img/Briefcase.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top' },
        //     { image: './img/Brush.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top' },
        //     { image: './img/Calendar.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top' },

        // ];
        // var settings = {

        //     entries: entries,
        //     width: 480,
        //     height: 480,
        //     radius: '65%',
        //     radiusMin: 75,
        //     bgDraw: true,
        //     bgColor: '#111',
        //     opacityOver: 1.00,
        //     opacityOut: 0.05,
        //     opacitySpeed: 6,
        //     fov: 800,
        //     speed: 2,
        //     fontFamily: 'Oswald, Arial, sans-serif',
        //     fontSize: '15',
        //     fontColor: '#fff',
        //     fontWeight: 'normal',//bold
        //     fontStyle: 'normal',//italic 
        //     fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        //     fontToUpperCase: true,
        //     tooltipFontFamily: 'Oswald, Arial, sans-serif',
        //     tooltipFontSize: '11',
        //     tooltipFontColor: '#fff',
        //     tooltipFontWeight: 'normal',//bold
        //     tooltipFontStyle: 'normal',//italic 
        //     tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        //     tooltipFontToUpperCase: false,
        //     tooltipTextAnchor: 'left',
        //     tooltipDiffX: 0,
        //     tooltipDiffY: 10

        // };
        // $('#tag-cloud').svg3DTagCloud(settings); 
    }
    
    render() {
        // var entries = [ 

        //     { label: 'Back to top', url: 'https://www.jqueryscript.net/tags.php?/Back%20to%20top/', target: '_top' },
        //     { label: '<a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a>', url: 'https://www.jqueryscript.net/tags.php?/Bootstrap/', target: '_top' },
        //     { label: '<a href="https://www.jqueryscript.net/tags.php?/Carousel/">Carousel</a>', url: 'https://www.jqueryscript.net/tags.php?/carousel/', target: '_top' },
        //     { label: 'Countdown', url: 'https://www.jqueryscript.net/tags.php?/countdown/', target: '_top' },
        //     { label: 'Dropdown <a href="https://www.jqueryscript.net/menu/">Menu</a>', url: 'https://www.jqueryscript.net/tags.php?/Drop%20Down%20Menu/', target: '_top' }
    

        return (
        <div>
            <section className="Graphic">
                {/* <Helmet>
                    <script type="text/babel" src="../../js/jquery.svg3dtagcloud.min.js"/>
                    <script type="text/jsx" src="../../js/test.js"/>
                    <div id="tag-cloud"></div>
                </Helmet> */}
                {/* <ScriptTag  src="../../js/jQuery.js" type="application/json"/>
                <ScriptTag  src="../../js/test.js" type="application/json"/> */}
                <h3>test1</h3>
                <h2>test1</h2>
                <h1>Grafika1</h1>
            </section>
        </div>
        )
        
    }
}

export default Graphic;