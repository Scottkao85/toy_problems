// Gives methods to create a binary search tree.

var root,
    createNode,
    add,
    search,
    addSubNode,
    findRightMost,
    replaceNodeInParent,
    binaryTreeDelete; 

// creating a new node
var createNode = function(val) {

    return {
        add: add,
        search: search,
        delete: binaryTreeDelete,
        left: undefined,
        right: undefined,
        value: val
    };
}