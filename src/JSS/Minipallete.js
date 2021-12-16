import React from 'react'
import {withStyles} from '@material-ui/styles'

const styles={
    main:{
        backgroundColor:'purple',
        border:'3px solid teal'
    },
    secondary:{
        // backgroundColor:'pink',
        "& h1":{
            color:'white',
            '& span':{
                backgroundColor:'yellow'
            }
        }
    }
}

function Minipallete(props) {
    console.log(props.classes.main)
    const {classes}=props;
    console.log(classes)
    return (
        <div className={classes.main}>
            <h1>Minipallete</h1>
            <section className={classes.secondary} >
                <h1>
                    Mini Palette <span>Anj</span>
                </h1>
                <span>Anj</span>
            </section>
        </div>
    );
}

export default withStyles(styles)(Minipallete);