
const Tree = function (root) {

    return { root };

}

console.log(1, 2, "Hei", "Harepus", false, 42);

const Node = function (data, ...connections) {
    return { data, connections: [...connections] }
}

export { Tree, Node };

