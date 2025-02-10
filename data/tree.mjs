
const Tree = function (root) {
    return { root };
}

const Node = function (data, ...connections) {
    return { data, connections: [...connections] }
}





export { Tree, Node };

