module.exports = function (babel) {
    return {
        visitor: {
            CallExpression: function (path) {
                const callee = path.get("callee");

                if (!callee.isMemberExpression()) return;

                if (isConsoleExpr(callee)) {
                    if (path.parentPath.isExpressionStatement()) {
                        path.remove();
                    }
                }
            }
        }
    };

    function isConsoleExpr(memberExpr) {
        const object = memberExpr.get("object");

        return isConsoleId(object) || isConsoleId(object.get("object"));
    }

    function isConsoleId(id) {
        return id.node && id.node.type === "Identifier" && id.node.name === "console";
    }
};