'use client'
import React, { useEffect, useState } from 'react'
import {
    talentGeneralFields, talentOtherDataFields,
    talentProfilPicAndResumeFields, talentSkillsExpAndFormationsFields
} from '@/utils/front/form/fieldsArrays';
import { Form, useFormik, FormikProvider } from 'formik'
import FormFieldProvider from '../formFieldProvider';
import { talentFileValidation, talentGeneralValidation, talentOtherDataValidation, talentSkillFormationAndExpValidation } from '@/utils/front/form/fieldsValidations';
import { finaliseTalentUserAccount } from '@/services/front/acoount';
import { SvgSpinnersBarsFade } from '@/uikits/icon';

export function TalentFinaliseAccountStepper({ updateLogin }) {
    const [stepIndex, setSI] = useState(0);
    const [stepIsValids, setSIV] = useState({
        step0: false,
        step1: false,
        step2: false,
        step3: false
    });
    const [finalisationLoading, setFL] = useState(false);
    const [finalObj, setFinalObj] = useState({});
    let steps = [
        {
            title: 'General', component: <TalentFinaliseGeneral
                setSIV={setSIV} setFinalObj={setFinalObj}
                finalObj={finalObj}
            />
        },
        {
            title: 'Formations,experience et Competence', component: <TalentFinaliseFormationsAndExperience
                setSIV={setSIV} setFinalObj={setFinalObj}
                finalObj={finalObj}
            />
        },
        {
            title: 'Fichiers', component: <TalentFinaliseResumeAndProfilPic
                setSIV={setSIV} setFinalObj={setFinalObj}
                finalObj={finalObj}
            />
        },
        {
            title: 'Autres', component: <TalentFinaliseOtherData
                setSIV={setSIV} setFinalObj={setFinalObj}
                finalObj={finalObj}
            />
        }
    ];

    function handlePrev() {
        if (stepIndex > 0) {
            setSI(prev => prev - 1)
        }
    }
    function handleNext() {
        if (stepIndex < (steps.length - 1)) {
            setSI(prev => prev + 1)
        } else {
            setFL(true)
            finaliseTalentUserAccount(finalObj, (res) => {
                updateLogin(res.data.token)
            }, () => { }, () => {
                setFL(false)
            })
        }
    }
    return <div className='talentFinaliseAccount'>
        {steps[stepIndex].component}
        <section className='tfa-navigator'>
            <button onClick={handlePrev} disabled={stepIndex == 0 ? true : false}>Precedent</button>
            <button onClick={handleNext} disabled={stepIsValids['step' + stepIndex] ? (finalisationLoading ? true : false) : true} >
                {finalisationLoading ? <SvgSpinnersBarsFade /> : 'Suivant'}
            </button>
        </section>
    </div>
}
function TalentFinaliseGeneral({ setSIV, setFinalObj, finalObj }) {
    const formik = useFormik({
        initialValues: {
            profession: finalObj.profession ?? '',
            firstname: finalObj.firstname ?? '', lastname: finalObj.lastname ?? '',
            age: finalObj.age ?? '', phone: finalObj.phone ?? '',
            country: finalObj.country ?? '', address: finalObj.address ?? '',
            gender: finalObj.gender ?? '', workSector: finalObj.workSector ?? [],
            lastDegree: finalObj.lastDegree ?? []
        },
        validationSchema: talentGeneralValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, values } = formik;

    useEffect(() => {
        if (isValid == true) {
            setSIV(prevState => ({ ...prevState, step0: true }));
            setFinalObj(prevState => ({ ...prevState, ...values }));
        } else {
            setSIV(prevState => ({ ...prevState, step0: false }));
        }
    }, [isValid]);


    return (
        <FormikProvider value={formik}>
            <Form>
                {
                    talentGeneralFields().map((item, i) => <FormFieldProvider key={'talent fg field nb' + i}
                        {...item} />)
                }
            </Form>
        </FormikProvider>
    )
}


function TalentFinaliseFormationsAndExperience({ setSIV, finalObj, setFinalObj }) {
    const formik = useFormik({
        initialValues: {
            formations: finalObj.formations ?? [],
            skills: finalObj.skills ?? [],
            experiences: finalObj.formations ?? [],
            expYears: finalObj.expYears ?? ''
        },
        validationSchema: talentSkillFormationAndExpValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, values } = formik;

    useEffect(() => {
        if (isValid == true) {
            setSIV(prevState => ({ ...prevState, step1: true }));
            setFinalObj(prevState => ({ ...prevState, ...values }));
        } else {
            setSIV(prevState => ({ ...prevState, step1: false }));
        }
    }, [isValid]);

    return (
        <FormikProvider value={formik}>
            <Form>
                {
                    talentSkillsExpAndFormationsFields().map((item, i) => <FormFieldProvider key={'talent fg field nb' + i}
                        {...item} />)
                }
            </Form>
        </FormikProvider>
    )
}


function TalentFinaliseResumeAndProfilPic({ setSIV, setFinalObj, finalObj }) {
    const formik = useFormik({
        initialValues: {
            profilPic: finalObj.profilPic ?? '', resume: finalObj.resume ?? ''
        },
        validationSchema: talentFileValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, values } = formik;

    useEffect(() => {
        if (isValid == true) {
            setSIV(prevState => ({ ...prevState, step2: true }));
            setFinalObj(prevState => ({ ...prevState, ...values }));
        } else {
            setSIV(prevState => ({ ...prevState, step2: false }));
        }
    }, [isValid]);

    return (
        <FormikProvider value={formik}>
            <Form>
                {
                    talentProfilPicAndResumeFields().map((item, i) => <FormFieldProvider key={'talent fg field nb' + i}
                        {...item} />)
                }
            </Form>
        </FormikProvider>
    )
}

function TalentFinaliseOtherData({ setSIV, setFinalObj, finalObj }) {
    const formik = useFormik({
        initialValues: {
            desiredSalary: finalObj.desiredSalary ?? '',
            preferredLocations: finalObj.preferredLocations ?? '',
            linkedinUrl: finalObj.linkedinUrl ?? '',
            langages: finalObj.langages ?? '',
            description: finalObj.description ?? '',
        },
        validationSchema: talentOtherDataValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting, values } = formik;

    useEffect(() => {
        if (isValid == true) {
            setSIV(prevState => ({ ...prevState, step3: true }));
            setFinalObj(prevState => ({ ...prevState, ...values }));
        } else {
            setSIV(prevState => ({ ...prevState, step3: false }));
        }
    }, [isValid]);

    return (
        <FormikProvider value={formik}>
            <Form>
                {
                    talentOtherDataFields().map((item, i) => <FormFieldProvider key={'talent fg field nb' + i}
                        {...item} />)
                }
            </Form>
        </FormikProvider>
    )
}
