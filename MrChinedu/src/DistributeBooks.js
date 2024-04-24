function distributeBooks() {
    let members = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = [];
    for (const member of members) {
        switch (member) {
            case "Emily":
                result.push({member: member, book: "Emily book"});
                break;
            case "Jack":
                result.push({member: member, book: "Jack book"});
                break;
            case "Sophia":
                result.push({member: member, book: "Sophia book"});
                break;
            case "Daniel":
                result.push({member: member, book: "Daniel book"});
                break;
        }
    }
    return result;
}


console.log(distributeBooks());