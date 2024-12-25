import React from "react"
import Sidebar from "./Sidebar"

const Analytics = () => {
  return (
    <div className="flex gap-12">
      <Sidebar />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Quantity</th>
                <th>Priority</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>Backlog</th>
                <td>4</td>
                <td className="font-bold">High Priority</td>
                <td>2</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>To-do</th>
                <td>6</td>
                <td className="font-bold">Moderate Priority</td>
                <td>12</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>In-Progress</th>
                <td>4</td>
                <td className="font-bold">Low Priority</td>
                <td>2</td>
              </tr>
              <tr>
                <th>Completed</th>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Due-Date</th>
                <td>14</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics
