import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    content: {
        flexGrow: 1
    }
});

const MainContent = ({ children, style }) => (
    <ScrollView
        contentContainerStyle={[
            styles.content,
            style
        ]}
    >
        {children}
    </ScrollView>
);

MainContent.propTypes = {
    children: PropTypes.node,
};

export default MainContent;
