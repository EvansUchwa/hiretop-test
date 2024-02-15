'use client'
import { useLang } from '@/contexts/langContext';
import SimpleButton, { FormButton } from '@/uikits/button';
import { MaterialSymbolsKeyboardArrowDown } from '@/uikits/icon';
import { rejectAppplyFields, validateAppplyFields } from '@/utils/front/form/fieldsArrays';
import Link from 'next/link';
import React, { useState } from 'react'
import MyCustomFormikForm from '../other';
import { FormikProvider, useFormik } from 'formik';
import FormFieldProvider from '../formFieldProvider';
import { useModal } from '@/contexts/modalContext';
import { applyAcceptValidation, applyRejectValidation } from '@/utils/front/form/fieldsValidations';
import { acceptOrRejectApply } from '@/services/front/apply';
import { checkUrl, errorAlert, successAlert } from '@/utils/front/others';

export function ApplyCardViewByTalent({ apply }) {
    const { cardsL, formsL, buttonsL } = useLang();

    const [viewMore, setVM] = useState(false);

    return (
        <article className='applyCard'>
            <p>
                {cardsL.apply.jobTitleBold}:<b>{apply.job.jobTitle}  </b>
                <br />
                {cardsL.apply.societyNameBold}:  <b>{apply.job.autor.societyName}  </b>
            </p>
            <p>
                {cardsL.apply.statusBold}: <b>{formsL.fields.statusOptions[apply.status]}</b>
            </p>
            <h3 onClick={() => setVM(prev => !prev)}>{buttonsL.seeMore}  <MaterialSymbolsKeyboardArrowDown /></h3>
            {
                viewMore && <section>
                    <p>
                        <b>{cardsL.apply.viewYourMessage}</b><br />
                        {apply.applyerMessage}</p>
                    {
                        apply.recrutorMessage && <p>
                            <b>{cardsL.apply.viewRecrutorMessage}</b><br />
                            {apply.recrutorMessage}</p>
                    }
                    {
                        apply.status == 'accepted' && <>
                            <p>
                                {cardsL.apply.interviewTypeBold}: <b>{formsL.fields.interviewTypeOptions[apply.interviewType]}</b>
                            </p>
                            <p>
                                {cardsL.apply.interviewDateBold}: <b>{apply.interviewDate}</b>
                            </p>
                            <p>
                                {cardsL.apply.interviewHourBold}: <b>{apply.interviewHour}</b>
                            </p>
                        </>
                    }

                </section>
            }

            <SimpleButton text={buttonsL.viewJob}
                isLink={'/job/' + apply.job._id + '/details'} />
        </article>
    )
}

export function ApplyCardViewBySociety({ apply, jobsWithApplysRefetch }) {
    const [viewMore, setVM] = useState(false);
    const { showModal, hideModal } = useModal();
    const { cardsL, formsL, buttonsL } = useLang();

    function showApplyValidationForm() {
        showModal(<AcceptApplyForm applyId={apply._id}
            hideModal={hideModal} jobsWithApplysRefetch={jobsWithApplysRefetch} buttonsL={buttonsL} />);
    }
    function showApplyRejectionForm() {
        showModal(<RejectApplyForm applyId={apply._id}
            hideModal={hideModal} jobsWithApplysRefetch={jobsWithApplysRefetch} buttonsL={buttonsL} />);
    }

    return (
        <article className='applyCard2'>
            <div>
                <img src={checkUrl(apply.talent.profilPic.url)} alt="" />
                <h4>{apply.talent.firstname + ' ' + apply.talent.lastname} </h4>
            </div>

            <p>
                Statut: <b>{formsL.fields.statusOptions[apply.status]}</b>
            </p>

            <h3 onClick={() => setVM(prev => !prev)}>{buttonsL.seeMore} <MaterialSymbolsKeyboardArrowDown /></h3>
            {
                viewMore && <section>

                    <p>
                        <b>{cardsL.apply.viewApplyerMessage}:</b>
                        <br />
                        {apply.applyerMessage}
                    </p>
                    <p>
                        <b>{cardsL.apply.viewYourMessage}:</b>
                        <br />
                        {apply.recrutorMessage}
                    </p>

                    {
                        apply.status == 'accepted' && <>
                            <p>
                                {cardsL.apply.interviewTypeBold}: <b>{formsL.fields.interviewTypeOptions[apply.interviewType]}</b>
                            </p>
                            <p>
                                {cardsL.apply.interviewDateBold}: <b>{apply.interviewDate}</b>
                            </p>
                            <p>
                                {cardsL.apply.interviewHourBold}: <b>{apply.interviewHour}</b>
                            </p>
                        </>
                    }
                </section>
            }

            <div className='ac2Links flex '>
                <Link href={'/job/' + apply.job._id + '/details'}>{buttonsL.viewJob}</Link>
                <Link href={'/talent/' + apply.talent._id + '/details'}>{buttonsL.viewTalentProfile}</Link>
            </div>

            <div className='ac2Btns flex f-column'>
                {
                    apply.status != "accepted" && <SimpleButton text={buttonsL.acceptApply}
                        onClick={() => showApplyValidationForm()}
                        defaultBg={"#8a2387"}
                        defaultColor="white"
                    />
                }
                {
                    apply.status != 'rejected' && <SimpleButton text={buttonsL.rejectApply}
                        onClick={() => showApplyRejectionForm()}
                        defaultBg={"#e94057"}
                        defaultColor="white" />
                }
            </div>
        </article>
    )
}

function AcceptApplyForm({ applyId, hideModal, jobsWithApplysRefetch, buttonsL }) {
    const formik = useFormik({
        initialValues: {
            status: "accepted", recrutorMessage: '', interviewType: '', interviewHour: '', interviewDate: '',
        },
        onSubmit: handleSubmit,
        validationSchema: applyAcceptValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting } = formik;

    function handleSubmit(values) {
        acceptOrRejectApply(applyId, values, () => {
            successAlert('apply', 'accepted')
            jobsWithApplysRefetch()
        }, (err) => {
            errorAlert(err)
        }, () => {
            hideModal();
        })
    }
    return <FormikProvider value={formik}>
        <MyCustomFormikForm>
            {
                validateAppplyFields().map((item, i) => <FormFieldProvider key={'valid apply form field nb' + i}
                    {...item} />)
            }
            <FormButton text={isSubmitting ? '' : buttonsL.save}
                isValid={isSubmitting ? false : isValid} />
        </MyCustomFormikForm>
    </FormikProvider>
}

function RejectApplyForm({ applyId, hideModal, jobsWithApplysRefetch, buttonsL }) {
    const formik = useFormik({
        initialValues: {
            status: "rejected", recrutorMessage: ''
        },
        onSubmit: handleSubmit,
        validationSchema: applyRejectValidation,
        validateOnMount: true
    });
    const { isValid, isSubmitting } = formik;
    const { buttonsLang } = useLang();

    function handleSubmit(values) {
        acceptOrRejectApply(applyId, values, () => {
            successAlert('apply', 'rejected')
            jobsWithApplysRefetch()
        }, (err) => {
            errorAlert(err)
        }, () => {
            hideModal();
        })
    }
    return <FormikProvider value={formik}>
        <MyCustomFormikForm>
            {
                rejectAppplyFields().map((item, i) => <FormFieldProvider key={'reject apply form field nb' + i}
                    {...item} />)
            }
            <FormButton text={isSubmitting ? '' : buttonsL.save}
                isValid={isSubmitting ? false : isValid} />
        </MyCustomFormikForm>
    </FormikProvider>
}
