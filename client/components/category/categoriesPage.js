import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import * as actions from '../../actions';
import Category from './category';
import categoryList from '../../data/categoriesData';

class Categories extends Component {
    getStyles() {
        return {
            categoryStyle: {
                height: "auto",
                overflow: "scroll",
                marginBottom: "40px"
            }
        }
    }
    renderCategory() {
        const list = categoryList.map((category, id) => {
            return <Category category={category} key={id}/>;
        });
        return list;
    }
    render() {
        const style = this.getStyles();
        return (
            <div style={style.categoryStyle}>
                {this.renderCategory()}
            </div>
        )
    }
}

export default connect(null, actions)(Categories);
