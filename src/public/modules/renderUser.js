export default function renderUser(users) {
    return `
        <tr class="tab-line" data-line="${users.backgroundLine}">
            <td class="tab-id" id="modal-id" data-id="id${users.dataId}">${users.id}</td>
            <td class="tab-name">
                <input
                    class="results"
                    type="text"                    
                    value="${users.name}"
                    id="ipt-name${users.dataId}"                    
                    disabled
                />
            </td>
            <td class="tab-email">
                <input
                    class="results"
                    type="text"
                    value="${users.email}"
                    id="ipt-email${users.dataId}"                    
                    disabled
                />
            </td>
            <td class="tab-edit">
                <span id="edit-conf${users.dataId}" class="material-symbols-outlined" data-id="edit-conf">
                    done_all
                </span>
                <span id="edit${users.dataId}" class="material-symbols-outlined" data-id="edit">
                    edit
                </span>
            </td>
            <td class="tab-delete" id="result-date">
                <span id="del${users.dataId}" class="material-symbols-outlined" data-id="del">
                    close
                </span>
            </td>
        </tr>                        
    `;
}
