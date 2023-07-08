import React from 'react'

const EditableClient = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      {Object.entries(editFormData).map(([key, value]) => {
        if (key !== 'id' && key !== 'ownerId' && key != 'passBoughtEvents' && key != 'entranceEvents')
        return (
          <td>
            <input
              type="text"
              name={key}
              onChange={handleEditFormChange}
              value={value}
            />
          </td>
        )
      })}
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  )
}

export default EditableClient
