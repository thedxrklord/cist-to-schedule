var rp = require('request-promise');
var iconv = require('iconv-lite');
const {performance} = require('perf_hooks');


// Credentials start
var privateKey = ""
var universityID = null
var authBasic = ""
// Credentials end


function cistGroupEvents(_groupID) {
    let options = {
        'method': 'GET',
        'url': 'https://cist.nure.ua/ias/app/tt/P_API_EVENTS_GROUP_JSON?p_id_group=' + _groupID + '&idClient=' + privateKey,
        encoding: null
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function cistStructure() {
    let options = {
        'method': 'GET',
        'url': 'https://cist.nure.ua/ias/app/tt/P_API_PODR_JSON',
        encoding: null
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function cistAuditories() {
    let options = {
        'method': 'GET',
        'url': 'https://cist.nure.ua/ias/app/tt/P_API_AUDITORIES_JSON',
        encoding: null
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleGroups() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/groups',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleTeachers() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/teachers',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleFaculties() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/faculties',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleFacultyDepartments(facultyID) {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/faculty/' + facultyID + '/departments',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleDepartmentTeachers(departmentID) {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/department/' + departmentID + '/teachers',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleDepartmentGroups(departmentID) {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/department/' + departmentID + '/groups',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleSubjects() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/subjects',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleTypes() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/types',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleClasstimes() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/classtimes',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleAuditories() {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/classrooms',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function scheduleEventsNormalized(groupID) {
    var options = {
        'method': 'GET',
        'url': 'https://schedule.dxrk.dev/api/auth/group/' + groupID + '/lessons-normal-short-names',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function removeScheduleEvents(events) {
    let form = []
    for (let i = 0; i < events.length; i++) {
        form['lessons[' + i + ']'] = events[i]
    }
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/lesson/mass-remove',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: form
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

async function getEmptyScheduleTeacher() {
    let teachers = await scheduleTeachers()
    teachers = JSON.parse(teachers)
    let teacherID = null

    teachers.forEach(function (teacher) {
        if (teacher.short_name === 'Не указан')
            teacherID = teacher.id
    })

    if (teacherID === null) {
        let faculty = await createEmptyFaculty()
        faculty = JSON.parse(faculty).facultyID
        let department = await createEmptyDepartment(faculty)
        department = JSON.parse(department).departmentID
        let teacher = await createEmptyTeacher(department)
        teacher = JSON.parse(teacher).teacherID

        return teacher
    } else {
        return teacherID
    }
}

function createEmptyTeacher(departmentID) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/department/' + departmentID + '/teacher/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: 'Не указан', fullName: 'Не указан'}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createTeacher(departmentID, shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/department/' + departmentID + '/teacher/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createGroup(departmentID, shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/department/' + departmentID + '/group/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createSubject(shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/subject/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createAuditory(name) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/classroom/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {name: name}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createType(shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/type/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createLessons(_lessons) {
    let form = []
    for (let i = 0; i < _lessons.length; i++) {
        form['lessons[' + i + ']'] = _lessons[i]
    }

    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/lesson/mass-create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: form
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createEmptyDepartment(facultyID) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/faculty/' + facultyID + '/department/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: 'Не указан', fullName: 'Не указан'}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createEmptyFaculty() {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/faculty/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: 'Не указан', fullName: 'Не указан'}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createFaculty(shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/university/' + universityID + '/faculty/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function createDepartment(facultyID, shortName, fullName) {
    var options = {
        'method': 'POST',
        'url': 'https://schedule.dxrk.dev/api/auth/faculty/' + facultyID + '/department/create',
        'headers': {
            'Authorization': 'Basic ' + authBasic,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {shortName: shortName, fullName: fullName}
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

function cistGroups() {
    var options = {
        'method': 'GET',
        'url': 'https://cist.nure.ua/ias/app/tt/P_API_GROUP_JSON',
        encoding: null
    }

    return rp(options, function (error, response) {
        if (error) throw new Error(error)

        return response.body
    });
}

async function cistGroupIDbyName(groupName) {
    return cistGroups().then(function (cistGroups) {
        let groupID = null
        cistGroups = JSON.parse(iconv.encode(iconv.decode(cistGroups, 'windows-1251'), 'utf8').toString().replace('\n', ''))

        cistGroups.university.faculties.forEach(faculty => {
            faculty.directions.forEach(direction => {
                if (direction.groups) {
                    direction.groups.forEach(group => {
                        if (group.name === groupName)
                            groupID = group.id
                    })
                }

                if (direction.specialities) {
                    direction.specialities.forEach(speciality => {
                        speciality.groups.forEach(group => {
                            if (group.name === groupName)
                                groupID = group.id
                        })
                    })
                }
            })
        })

        return groupID
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fillUniversityTeachers() {
    let sFaculties = await scheduleFaculties()
    sFaculties = JSON.parse(sFaculties)

    let scheduleFacultyShortNames = []
    let scheduleFacultyIds = []
    let scheduleDepartmentShortNames = []
    let scheduleDepartmentIds = []
    let teacherShortNames = []

    for (let sFaculty of sFaculties) {
        scheduleFacultyShortNames.push(sFaculty.short_name)
        scheduleFacultyIds[sFaculty.short_name] = sFaculty.id

        let departments = await scheduleFacultyDepartments(sFaculty.id)
        departments = JSON.parse(departments)

        for (let department of departments) {
            scheduleDepartmentShortNames.push(department.short_name)
            scheduleDepartmentIds[department.short_name] = department.id

            let teachers = await scheduleDepartmentTeachers(department.id)
            teachers = JSON.parse(teachers)
            for (let teacher of teachers)
                teacherShortNames.push(teacher.short_name)
        }
    }

    cistGroups().then(async function (cStructure) {
        cStructure = await JSON.parse(iconv.encode(iconv.decode(cStructure, 'windows-1251'), 'utf8').toString().replace('\n', ''))
        for (let faculty of cStructure.university.faculties) {
            let shortName = faculty.short_name
            let fullName = faculty.full_name

            if (!scheduleFacultyShortNames.includes(shortName)) {
                let created = await createFaculty(shortName, fullName)
                created = JSON.parse(created)
                scheduleFacultyIds[shortName] = created.facultyID
                scheduleFacultyShortNames.push(shortName)
            }

            for (let department of faculty.directions) {
                shortName = department.short_name
                fullName = department.full_name

                if (!scheduleDepartmentShortNames.includes(shortName)) {
                    let created = await createDepartment(faculty.id, shortName, fullName)
                    created = JSON.parse(created)
                    scheduleDepartmentIds[shortName] = created.departmentID
                    scheduleDepartmentShortNames.push(shortName)
                }

                for (let teacher of department.teachers) {
                    shortName = teacher.short_name
                    fullName = teacher.full_name

                    if (shortName.length > fullName.length) {
                        let temp = fullName
                        fullName = shortName
                        shortName = temp
                    }

                    if (!teacherShortNames.includes(shortName)) {
                        createTeacher(scheduleDepartmentIds[department.short_name], shortName, fullName)
                    }
                }
            }
        }
    })

}

async function fillUniversityAuditories() {
    let sAudotories = await scheduleAuditories()
    sAudotories = JSON.parse(sAudotories)
    let scheduleAuditoriesNames = []

    sAudotories.forEach(auditory => {
        scheduleAuditoriesNames.push(auditory.name)
    })

    cistAuditories().then(async function (cAuditories) {
        cAuditories = await JSON.parse(iconv.encode(iconv.decode(cAuditories, 'windows-1251'), 'utf8').toString().replace('\n', ''))
        for (let cBuilding of cAuditories.university.buildings) {
            for (let cAuditory of cBuilding.auditories) {
                let normalAuditoryName = null
                if (cAuditory.short_name.includes(cBuilding.short_name))
                    normalAuditoryName = cAuditory.short_name
                else
                    normalAuditoryName = cAuditory.short_name + ' ' + cBuilding.short_name
                if (!scheduleAuditoriesNames.includes(normalAuditoryName)) {
                    let created = await createAuditory(normalAuditoryName)
                    created = JSON.parse(created)
                    scheduleAuditoriesNames.push(normalAuditoryName)
                }
            }
        }
    })
}

async function fillUniversityGroups() {
    let sFaculties = await scheduleFaculties()
    sFaculties = JSON.parse(sFaculties)
    let scheduleFacultyShortNames = []
    let scheduleFacultyIds = []
    let scheduleDepartmentShortNames = []
    let scheduleDepartmentIds = []
    let groupShortNames = []

    for (let sFaculty of sFaculties) {
        scheduleFacultyShortNames.push(sFaculty.short_name)
        scheduleFacultyIds[sFaculty.short_name] = sFaculty.id;

        let departments = await scheduleFacultyDepartments(sFaculty.id)
        departments = JSON.parse(departments)
        for (let department of departments) {
            scheduleDepartmentShortNames.push(department.short_name)
            scheduleDepartmentIds[department.short_name] = department.id

            let groups = await scheduleDepartmentGroups(department.id)

            groups = JSON.parse(groups)
            for (let group of groups) {
                groupShortNames.push(group.short_name)
            }
        }
    }

    cistStructure().then(async function (cStructure) {
        cStructure = await JSON.parse(iconv.encode(iconv.decode(cStructure, 'windows-1251'), 'utf8').toString().replace('\n', ''))

        for (let faculty of cStructure.university.faculties) {
            // Short names fix
            if (faculty.short_name.length > faculty.full_name.length) {
                let temp = faculty.short_name
                faculty.short_name = faculty.full_name
                faculty.full_name = temp
            }

            if (!scheduleFacultyShortNames.includes(faculty.short_name)) {
                let created = await createFaculty(faculty.short_name, faculty.full_name)
                created = JSON.parse(created)
                scheduleFacultyIds[faculty.short_name] = created.facultyID
                scheduleFacultyShortNames.push(faculty.short_name)
            }

            for (let department of faculty.departments) {
                // Short names fix
                if (department.short_name > department.full_name) {
                    let temp = department.short_name
                    department.short_name = department.full_name
                    department_full_name = temp
                }

                if (!scheduleDepartmentShortNames.includes(department.short_name)) {
                    let created = await createDepartment(scheduleFacultyIds[faculty.short_name], department.short_name, department.full_name)
                    created = JSON.parse(created)
                    scheduleDepartmentIds[department.short_name] = created.departmentID
                    scheduleFacultyShortNames.push(department.short_name)
                }

                if (department.groups !== undefined && department.groups !== null) {
                    for (let group of department.groups) {
                        if (!groupShortNames.includes(group.name)) {
                            let created = await createGroup(scheduleDepartmentIds[department.short_name], group.name, group.name)
                            created = JSON.parse(created)
                            groupShortNames.push(group.name)
                        }
                    }
                }

                if (department.specialities !== undefined && department.specialities !== null) {
                    for (let speciality of department.specialities) {
                        // Short names fix
                        if (speciality.short_name.length > speciality.full_name.length) {
                            let temp = speciality.short_name
                            speciality.short_name = speciality.full_name
                            speciality.full_name = temp
                        }

                        if (!scheduleDepartmentShortNames.includes(speciality.short_name)) {
                            let created = await createDepartment(scheduleFacultyIds[faculty.short_name], speciality.short_name, speciality.full_name)
                            created = JSON.parse(created)
                            scheduleDepartmentIds[speciality.short_name] = created.departmentID
                            scheduleDepartmentShortNames.push(speciality.short_name)
                        }

                        for (let group of speciality.groups) {
                            if (!groupShortNames.includes(group.name)) {
                                let created = createGroup(scheduleDepartmentIds[speciality.short_name], group.name, group.name)
                                created = JSON.parse(created)
                                groupShortNames.push(group.name)
                            }
                        }
                    }
                }
            }
        }
    })
}

async function cistToScheduleEvents() {
    scheduleGroups().then(async function (gGroups) {
        let responses = 0
        let responsesNeeded = 0

        let sTeachers
        scheduleTeachers().then(function (_teachers) {
            responses++
            sTeachers = JSON.parse(_teachers)
        })
        responsesNeeded++

        let sSubjects
        scheduleSubjects().then(function (_subjects) {
            responses++
            sSubjects = JSON.parse(_subjects)
        })
        responsesNeeded++

        let sTypes
        scheduleTypes().then(function (_types) {
            responses++
            sTypes = JSON.parse(_types)
        })
        responsesNeeded++

        let sClasstimes
        scheduleClasstimes().then(function (_classtimes) {
            responses++
            sClasstimes = JSON.parse(_classtimes)
        })
        responsesNeeded++

        let sAuditories
        scheduleAuditories().then(function (_auditories) {
            responses++
            sAuditories = JSON.parse(_auditories)
        })
        responsesNeeded++

        while (responses !== responsesNeeded) {
            await sleep(50)
        }

        let scheduleSubjectsShortNames = []
        let scheduleTypesShortNames = []
        let scheduleSubjectsIds = []
        let scheduleTypesIds = []
        let scheduleTeachersIds = []
        let scheduleAuditoriesIds = []

        if (sSubjects) {
            sSubjects.forEach(sSubject => {
                scheduleSubjectsShortNames.push(sSubject.short_name)
                scheduleSubjectsIds[sSubject.short_name] = sSubject.id
            })
        }

        if (sTypes) {
            sTypes.forEach(sType => {
                scheduleTypesShortNames.push(sType.short_name)
                scheduleTypesIds[sType.short_name] = sType.id
            })
        }

        if (sTeachers) {
            sTeachers.forEach(sTeacher => {
                scheduleTeachersIds[sTeacher.short_name] = sTeacher.id
            })
        }

        if (sAuditories) {
            sAuditories.forEach(auditory => {
                scheduleAuditoriesIds[auditory.name] = auditory.id
            })
        }
        let emptyTeacherID = await getEmptyScheduleTeacher()


        gGroups = JSON.parse(gGroups)
        for (let gGroup of gGroups) {
            let groupID = gGroup.id
            let t0 = performance.now()

            await scheduleGroups().then(async function (scheduleGroups) {
                let cistSubjectsIds = []
                let cistTeachersIds = []
                let cistTypesIds = []

                scheduleGroups = JSON.parse(scheduleGroups)
                let groupName = null

                scheduleGroups.forEach(scheduleGroup => {
                    if (scheduleGroup.id === groupID) {
                        groupName = scheduleGroup.short_name
                    }
                });

                if (!groupName) {
                    console.log('Group not found')
                    return
                }

                let cistGroupID = await cistGroupIDbyName(groupName)

                cistGroupEvents(cistGroupID).then(async function (schedule) {
                    try {
                        schedule = JSON.parse(iconv.encode(iconv.decode(schedule, 'windows-1251'), 'utf8').toString().replace('\n', ''))
                    } catch (e) {
                        console.log(groupName + ' is empty')
                        return
                    }

                    if (!schedule.subjects) {
                        console.log(groupName + ' has no subjects')
                        return true;
                    }

                    for (const subject of schedule.subjects) {
                        subject.brief = subject.brief.trim()
                        if (!scheduleSubjectsShortNames.includes(subject.brief)) {
                            let created = await createSubject(subject.brief, subject.title)
                            created = JSON.parse(created)
                            scheduleSubjectsIds[subject.brief] = created.subjectID
                            scheduleSubjectsShortNames.push(subject.brief)
                        }
                        cistSubjectsIds[subject.id] = subject.brief
                    }

                    for (const type of schedule.types) {
                        if (!scheduleTypesShortNames.includes(type.short_name)) {
                            let created = await createType(type.short_name, type.full_name);
                            created = JSON.parse(created)
                            scheduleTypesIds[type.short_name] = created.typeID
                            scheduleTypesShortNames.push(type.short_name)
                        }
                        cistTypesIds[type.id] = type.short_name
                    }

                    schedule.teachers.forEach(teacher => {
                        cistTeachersIds[teacher.id] = teacher.short_name
                    })

                    let oldEvents = await scheduleEventsNormalized(groupID)
                    oldEvents = JSON.parse(oldEvents)
                    if (oldEvents) {
                        let toDelete = []
                        oldEvents.forEach(oldEvent => {
                            if (cistTypesIds.includes(oldEvent.type)) {
                                toDelete.push(oldEvent.id)
                            }
                        })
                        if (toDelete.length > 1)
                            removeScheduleEvents(toDelete)
                    }

                    let toCreate = []
                    schedule.events.forEach(event => {
                        let classtimeNeeded = null
                        let date = new Date(event.start_time * 1000)
                        let startTime = date.toLocaleTimeString('uk-UA', {timeZone: 'Europe/Kiev'})
                        date = new Date(event.end_time * 1000)
                        let endTime = date.toLocaleTimeString('uk-UA', {timeZone: 'Europe/Kiev'})

                        sClasstimes.forEach(classtime => {
                            if (classtime.start === startTime && classtime.end === endTime)
                                classtimeNeeded = classtime.id
                        })

                        if (classtimeNeeded === null) {
                            console.log('Classtime needed')
                            return
                        }

                        let info = []
                        info.subjectID = scheduleSubjectsIds[cistSubjectsIds[event.subject_id]]
                        info.classtimeID = classtimeNeeded
                        info.typeID = scheduleTypesIds[cistTypesIds[event.type]]
                        info.date = (new Date(event.start_time * 1000)).toLocaleDateString()
                        info.groupID = groupID

                        if (scheduleTeachersIds[cistTeachersIds[event.teachers[0]]] === undefined) {
                            info.teacherID = emptyTeacherID
                        } else {
                            info.teacherID = scheduleTeachersIds[cistTeachersIds[event.teachers[0]]]
                        }

                        if (scheduleAuditoriesIds[event.auditory] === undefined) {
                            createAuditory(event.auditory).then(function (created) {
                                created = JSON.parse(created)
                                scheduleAuditoriesIds[created.classroomID] = event.auditory
                                toCreate.push(info)
                            })
                        } else {
                            info.classroomID = scheduleAuditoriesIds[event.auditory]
                            toCreate.push(info)
                        }
                    })

                    createLessons(toCreate)
                })
            })
            let t1 = performance.now()
            console.log('Parsed ' + groupID + ' in ' + (t1 - t0) / 1000 + ' seconds')
        }
    });
}


function exitNoArgument() {
    console.log('Need cmd argument (structure/events)')
    process.exit(-1)
}

var argument = null

try {
    argument = process.argv.slice(2).toString()
} catch (e) {
    exitNoArgument()
}

if (privateKey.length < 1) {
    console.log('No cist API key')
    process.exit(-1)
}
if (universityID === null || universityID === undefined) {
    console.log('No schedule university ID')
    process.exit(-1)
}
if (authBasic.length < 1) {
    console.log('No schedule accout provided')
    process.exit(-1)
}

switch(argument) {
    case 'structure': {
        const parse = async () =>
        {
            await fillUniversityAuditories()
            await fillUniversityTeachers()
            await fillUniversityGroups()
        }
        parse().then(result => {
            console.log('Structure parsed')
        })
        break
    }
    case 'events': {
        const parse = async () => {
            await cistToScheduleEvents()
        }

        parse().then(result => {
            console.log('Events parser started')
        })
        break
    }
    default:
        exitNoArgument()
        break;
}