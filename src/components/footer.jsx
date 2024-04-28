
const currentYear = new Date().getFullYear();

const footer = () => {
    return (
        <div className="bg-gray-800 text-white py-10">
            <div className="text-center">
                <p>
                    © {currentYear} Chaliyaporn Suttisak. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default footer;